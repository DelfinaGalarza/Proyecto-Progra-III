import React, {Component} from 'react';
import './styles.css'
import {Link} from 'react-router-dom';


class CardAlbum extends Component{
    constructor(props){
        super(props)
        this.state={
            fav: 'AGREGAR A FAVORITOS',
            verMas: 'hide',
        }
    }


    componentDidMount(){
        //traigo el storage
        let favoritos= [];
        let storage = localStorage.getItem('favoritos')

        if(storage !== null){
            let parsedStorage= JSON.parse(storage) 
            favoritos = parsedStorage
        }
        if(favoritos.includes(this.props.datosAlbum.id)){
            this.setState({
                fav: 'QUITAR DE FAVORITOS'
            })
        }
    }
    agregarYQuitarFav(id){
        let favoritos= [];
        let storage = localStorage.getItem('favoritos')

        if(storage !== null){
            let favToArray = JSON.parse(storage);
            favoritos = favToArray
        }
        
        if(favoritos.includes(id)){
            favoritos = favoritos.filter(unId => unId !== id);
            //mostrar al usuario agregar
            this.setState({
                fav: 'AGREGAR A FAVORITOS'
            })
        } else{
            favoritos.push(id);
            //mostrar quitar
            this.setState({
                fav: 'QUITAR DE FAVORITOS'
            })
        }
        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);
    }
    //     let isFavorite = parsedStorage.includes(this.props.datosAlbum.id)


    //     if(isFavorite){
    //         this.setState({
    //             favorito: true
    //         })
    //     }
    // }
    verMas(){
        if(this.state.verMas === 'show'){
            this.setState({
                verMas: 'hide'
            })
        }else{
            this.setState({
                verMas: 'show'}
            )
        }
    }

    render(){
        // console.log(this.props);
        return(
            <article className="album-card" >
                <Link to={`/DetalleA/${this.props.datosAlbum.id}`}  > <img className="img" src={this.props.datosAlbum.cover} alt="" /> </Link>
                
                <h2>{this.props.datosAlbum.title}</h2> {/* Nombre */}
                <p>{this.props.datosAlbum.artist.name}</p>
                {/* <p>{this.props.datosAlbum.album.title}</p> Especie */}
                {/* <p className='more'>Ver más</p>  */}
                {/* <section className='extra'>
                    <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                </section> */}

                <button onClick={()=> this.verMas()}> Ver mas </button>
                <p className={this.state.verMas}> If you can never get enough true crime... Congratulations, you’ve found your people.</p>
                
                <button className='delete' onClick={()=>this.agregarYQuitarFav(this.props.datosAlbum.id)}>{this.state.fav}</button>
                {/* <p className='delete' onClick={()=>this.props.borrar(this.props.datosAlbum.id)}>Borrar</p> */}
        
            </article>

        )
    }

}

export default CardAlbum 