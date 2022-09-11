import React, {Component} from 'react';
import './styles.css'
import {Link} from 'react-router-dom';


class CardAlbum extends Component{
    constructor(props){
        super(props)
        this.state={
            fav: 'AGREGAR A FAVORITOS',
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

    // addFavorites(id){
    //     let favStorage = localStorage.getItem('favoritos') 

    //     if(favStorage === null){ //favStorage es null
    //         let favArr = [id] 
    //         let arrToString = JSON.stringify(favArr)
    //         localStorage.setItem('favoritos', arrToString) //le guardamos arrToString a la propiedad favoritos
    //     } else{ //favStorage tiene un valor adentro
    //         let parsedArr = JSON.parse(favStorage) //ya es un array
    //         parsedArr.push(id) //le mando el id
    //         let arrToString = JSON.stringify(parsedArr) //lo paso a string
    //         localStorage.setItem('favoritos', arrToString) //lo seteo
    //     }
    //     this.setState({
    //         favorito: true
    //     })
    // }
    // removeFavorites(id){
    //     let favStorage = localStorage.getItem('favoritos') //traemos el storage
    //     let parsedStorage = JSON.parse(favStorage) //vuelve a ser un array
    //     //filtramos y verifico si el id es diferente al que me pasaron por el parametro
    //     let filtroStorage = parsedStorage.filter(elm => elm !== id ) //elm representa los elm del array
    //     //filter crea un nuevo array que cumple las condiciones
    //     //seteo el nuevo valor en el storage
    //     let storageToString = JSON.stringify(filtroStorage) //paso de array to string
    //     localStorage.setItem('favoritos', storageToString)

    //     this.setState({
    //         favorito: false
    //     })
    // }

    render(){
        // console.log(this.props);
        return(
            <article className="album-card" >
                <Link to={`/DetalleA/${this.props.datosAlbum.id}`}  > <img className="img" src={this.props.datosAlbum.cover} alt="" /> </Link>
                
                <h2>{this.props.datosAlbum.title}</h2> {/* Nombre */}
                <p>{this.props.datosAlbum.artist.name}</p> {/* Estado */}
                {/* <p>{this.props.datosAlbum.album.title}</p> Especie */}
                {/* <p className='more'>Ver más</p>  */}
                {/* <section className='extra'>
                    <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                </section> */}
                
                <button className='delete' onClick={()=>this.agregarYQuitarFav(this.props.datosAlbum.id)}>{this.state.fav}</button>
                <p className='delete' onClick={()=>this.props.borrar(this.props.datosAlbum.id)}>Borrar</p>
                {/* {
                    this.state.favorito ?
                    <button onClick={()=>this.removeFavorites(this.props.datosAlbum.id)}> Sacar de Favoritos </button>
                    :
                    <button onClick={()=>this.addFavorites(this.props.datosAlbum.id)}> Agregar a Favoritos </button>
            
                } */}
            </article>

        )
    }

}

export default CardAlbum 