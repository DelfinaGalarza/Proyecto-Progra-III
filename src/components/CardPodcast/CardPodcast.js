import React, {Component} from 'react';
import './styles.css'
import {Link} from 'react-router-dom';

class CardPodcast extends Component{
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
        if(favoritos.includes(this.props.datosPodcast.id)){
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
            <article className='podcast-card'>
                <div >
                    <div >
                    <Link to={`/DetalleP/${this.props.datosPodcast.id}`}  > <img className="img" src={this.props.datosPodcast.picture} alt="" /> </Link>
 
                    </div>

                <h2 >{this.props.datosPodcast.title}</h2> {/* Nombre */}
             {/* <p >{this.props.datosPodcast.artist.name}</p>  */}
                {/* <p>{this.props.datosCancion.album.title}</p> Especie */}
                {/* <p className='more'>Ver más</p>  */}
                {/* <section className='extra'>
                    <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                </section> */}

                    <button onClick={()=> this.verMas()}> Ver mas </button>
                <p className={this.state.verMas}> {this.props.datosPodcast.description}</p>

                <button className='delete' onClick={()=>this.agregarYQuitarFav(this.props.datosPodcast.id)}>{this.state.fav}</button>
                </div>
                
            </article>

        )
    }

}

export default CardPodcast