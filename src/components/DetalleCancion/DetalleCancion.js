import React, {Component} from 'react';
import './detalleCancion.css'

class DetalleCancion extends Component{
    constructor(props){
        super(props)
        this.state={
            favorito: false
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
            <article className='album'>
                <div >
                    <div >
                    <img src={this.props.datosAlbum.cover} alt="" />
                    </div>

                <h2 >{this.props.datosAlbum.title}</h2> {/* Nombre */}
                <p >{this.props.datosAlbum.artist.name}</p> {/* Estado */}
                {/* <p>{this.props.datosCancion.album.title}</p> Especie */}
                {/* <p className='more'>Ver más</p>  */}
                {/* <section className='extra'>
                    <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                </section> */}
                <p  onClick={()=>this.props.borrar(this.props.datosCancion.id)}>Borrar</p>
                {
                    this.state.favorito ?
                    <button onClick={()=>this.removeFavorites(this.props.datosCancion.id)}> Sacar de Favoritos </button>
                    :
                    <button onClick={()=>this.addFavorites(this.props.datosCancion.id)}> Agregar a Favoritos </button>
            
                }
                </div>
                
            </article>

        )
    }

}

export default DetalleCancion