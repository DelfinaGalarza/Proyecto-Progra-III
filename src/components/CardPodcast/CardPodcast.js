import React, {Component} from 'react';
import './styles.css'
import {Link} from 'react-router-dom';

class CardPodcast extends Component{
    constructor(props){
        super(props)
        this.state={
            favorito: false
        }
    }
    componentDidMount(){
        //traigo el storage
        let storage = localStorage.getItem('favoritos')
        let parsedStorage= JSON.parse(storage)

        let isFavorite = parsedStorage.includes(this.props.datosPodcast.id)

        if(isFavorite){
            this.setState({
                favorito: true
            })
        }
    }

    addFavorites(id){
        let favStorage = localStorage.getItem('favoritos')

        if(favStorage === null){
            let favArr = [id]
            let arrToString = JSON.stringify(favArr)
            localStorage.setItem('favoritos', arrToString)
        } else{
            let parsedArr = JSON.parse(favStorage)
            parsedArr.push(id)
            let arrToString = JSON.stringify(parsedArr)
            localStorage.setItem('favoritos', arrToString)
        }
        this.setState({
            favorito: true
        })
    }
    removeFavorites(id){
        let favStorage = localStorage.getItem('favoritos')
        let parsedStorage = JSON.parse(favStorage) //vuelve a ser un array
        //filtramos y verifico si el id es diferente al que me pasaron por el parametro
        let filtroStorage = parsedStorage.filter(elm => elm !== id )
        //seteo el nuevo valor en el storage
        let storageToString = JSON.stringify(filtroStorage)
        localStorage.setItem('favoritos', storageToString)

        this.setState({
            favorito: false
        })
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

                {
                    this.state.favorito ?
                    <button onClick={()=>this.removeFavorites(this.props.datosAlbum.id)}> Sacar de Favoritos </button>
                    :
                    <button onClick={()=>this.addFavorites(this.props.datosAlbum.id)}> Agregar a Favoritos </button>
            
                }
                </div>
                
            </article>

        )
    }

}

export default CardPodcast