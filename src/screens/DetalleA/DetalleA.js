import React, {Component} from 'react';
import './styles.css'




class DetalleA extends Component{
        constructor(props){
            super(props)
            this.state={

                album:false, //aparecer personaje
                // backup:[],
                // ready:false,
                id: Number(props.match.params.id),
            }
            console.log(this.state.id)
        }

    componentDidMount(){
        
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`
    
       
        fetch(url)
        .then( res => res.json())
            .then( data => this.setState(
                {album: data}
                ))
            
            .catch(e => console.log(e)
            )
       
     }

    render(){
        console.log(this.state.album);
        
        return(
            <section className='cajaPadre'>
            <article className='album-card'>
            {
            this.state.album ?
            <>
            <h1> {this.state.album.title}</h1>
            <img className="img" src={this.state.album.cover_medium} alt="" /> 

                <h2>Artista: {this.state.album.artist.name}</h2>   
                <h3>Genero: {this.state.album.genres.data[0].name}</h3>  
                <h3>Fans: {this.state.album.fans}</h3> 
                <h3> Fecha de lanzamiento: {this.state.album.release_date}</h3> 
                <ul>Lista de canciones:
                <li>  {this.state.album.tracks.data[2].title}</li>
                </ul>
                

                
            </>:
            <p> Cargando</p>
            }

            </article>
            </section>

        )
    }

}

export default DetalleA