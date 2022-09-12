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
            <React.Fragment>
            
            { this.state.album ?
            <>
             <h1> {this.state.album.title}</h1>
            <img className="img" src={this.state.album.cover_medium} alt="" /> 
                
                <p>{this.state.album.genres.data[0].name}</p>  
            </>:
            <p> Cargando</p>
            }
            
           
            
                {/* {this.state.albumes.map ((unAlbum, idx)=> <CardAlbum key={unAlbum + idx} datosAlbum={unAlbum}/>)} */}
                
                {/* <p>{this.props.datosAlbum.title}</p> 
                <p className='more'>Ver más</p>  */}
                
                     
                
                
            
                {/* <p className='delete' onClick={()=>this.props.borrar(this.props.datosAlbum.id)}>Borrar</p> */}
                {/* {
                    this.state.favorito ?
                    <button onClick={()=>this.removeFavorites(this.props.datosAlbum.id)}> Sacar de Favoritos </button>
                    :
                    <button onClick={()=>this.addFavorites(this.props.datosAlbum.id)}> Agregar a Favoritos </button>
            
                } */}

            </React.Fragment>

        )
    }

}

export default DetalleA