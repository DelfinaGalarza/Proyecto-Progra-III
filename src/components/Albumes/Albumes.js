import React, {Component} from 'react';
import CardAlbum from '../CardAlbum/CardAlbum';
import './styles.css'
import Filtro from "../Filtro/Filtro";

class Albumes extends Component{
    constructor(props){
        super(props)
        this.state={
            albumes:[], //aparecer personaje
            backup:[],
            ready:false,
        }
    }

    componentDidMount(){
        //Buscamos datos
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums')
            .then( res => res.json())
            .then( data =>{
                console.log(data);
                this.setState({
                albumes: data.data,
                backup: data.data,
                ready:true
            })})
            .catch(e => console.log(e)
            )
    }

    filtrarTarjetas(nombreBuscado){
     let podcastsFiltradas= this.state.backup.filter(podcast => podcast.title.toLowerCase().includes(nombreBuscado.toLowerCase()));
    this.setState({
    podcasts: podcastsFiltradas
        })

    }
    
    // traerMas(){
    //     //Traer la siguiente página de personajes
    //     fetch(this.state.nextUrl)
    //         .then( res => res.json())
    //         .then( data => this.setState({
    //             canciones: data.results.concat(this.state.canciones),
    //             nextUrl: data.info.next
    //         }))
    //         .catch()
    // }

 borrar(id){
    let podcastsFiltradas = this.state.podcasts.filter(unPodcast => unPodcast.id !== id);
    this.setState({
       podcasts: podcastsFiltradas
    })
     }


    render(){
        return(
            <>
             <Filtro filtro ={(nombreBuscado)=> this.filtrarTarjetas(nombreBuscado)} />
            
             {/* <button onClick={()=>this.traerMas()}> Traer más </button>  */}
        
                <section className="card-container">
                    
                    { 
                    this.state.albumes.length > 0?
                        this.state.albumes.map( (unAlbum, idx) => <CardAlbum key={unAlbum +idx} datosAlbum ={unAlbum} />)
                    : 'Cargando'
                    }
                </section>
            
            </>
        )
    }

}


export default Albumes