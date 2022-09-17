import React, {Component} from 'react';
import './styles.css'
import CardPodcast from '../CardPodcast/CardPodcast';
import Filtro from "../Filtro/Filtro";


class Podcasts extends Component{
    constructor(){
        super()
        this.state={
            podcasts:[], //aparecer personaje
            backup:[],
            ready:false,
        }
    }

    componentDidMount(){
        //Buscamos datos
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/podcasts?limit=8')

            .then( resp => resp.json())
            .then( data =>this.setState({
                podcasts: data.data,
                backup: data.data,
                ready:true
            }))
            .catch(e => console.log(e)
            )
    }


    borrar(name){
        let podcastsFiltrados = this.state.podcasts.filter(unpodcast => unpodcast.name !== name);
        this.setState({
            podcasts: podcastsFiltrados
        })
        }


    filtrarPodcasts(nombre){
        let podcastFiltrado= 
        this.state.backup.filter
        (podcast => podcast.title.toLowerCase().includes(nombre.toLowerCase()));
    
        this.setState({
        podcasts: podcastFiltrado
        })

    }
    

    render(){
        return(
            <>
             <Filtro filtro ={(nombre)=> this.filtrarPodcasts(nombre)} />        
             <section className="card-container" >
                    
                    { 
                    this.state.podcasts.length >0 ?
                        this.state.podcasts.map( (unPodcast, idx) => 
                        <CardPodcast 
                        key={unPodcast +idx} 
                        datosPodcast ={unPodcast} />)
                    : 'Cargando'
                    }
                </section>
            
            </>
        )
    }

}



export default Podcasts

