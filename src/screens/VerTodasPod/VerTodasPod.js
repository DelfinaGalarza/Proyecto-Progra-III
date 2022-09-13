import React, { Component } from 'react'
import './styles.css'
import CardPodcast from '../../components/CardPodcast/CardPodcast'
import Filtro from '../../components/Filtro/Filtro'



class VerTodasPod extends Component {
        constructor(props){
            super(props)
            this.state={
                podcasts:[], //aparecer personaje
                backup:[],
                limite: 16,
                index: 0,
            }
        }
    
        componentDidMount(){
            console.log('Estamos en VerTodasPod')
            //Buscamos datos
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/podcasts?index=${this.state.index}&limit=${this.state.limite}`)
                .then( res => res.json())
                .then( data => {
                    console.log('Esta es la data inicial');
                    console.log(data);
                    this.setState({
                    podcasts: data.data,
                    backup: data.data,
                    index: this.state.limite
                })})
                .catch(e => console.log(e)
                )
        }
        cargarMas(){
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/podcasts?index=${this.state.index}&limit=${this.state.limite}`)
            .then( res => res.json())
            .then( data => {
                this.setState({
                podcasts: this.state.podcasts.concat(data.data),
                backup: this.state.podcasts.concat(data.data),
                index: this.state.index + this.state.limite
            })})
            .catch(e => console.log(e)
            )
        }
        
    
        // buscarAlbumes(nombre){
        //     fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums/?name=${nombre}`)
        //    .then(resp => resp.json())
        //    .then(data => {
        //     console.log('esta es la data')   
        //     console.log(data)   
        //     this.setState({
        //         albumes: data.results
        //      }, ()=> console.log(this.state.albumes))})
        //     .catch(err => console.log(err))
        //  }
    
        filtrarPodcast(nombre){
            let podcastFiltrado= 
            this.state.backup.filter
            (album => album.title.toLowerCase().includes(nombre.toLowerCase()));

            this.setState({
            podcasts: podcastFiltrado
            })
    
        }
    
        render(){
            return(
                <>
                <Filtro filtro ={(nombre)=> this.filtrarPodcast(nombre)} />        
                <section className="card-container">
    
                        { 
                            this.state.podcasts.length > 0 ?
                            this.state.podcasts.map( (unPodcast, idx) => 
                            <CardPodcast
                            key={unPodcast +idx} 
                            datosPodcast ={unPodcast} />)
                        : 'Cargando'
                        }
                </section>
                <button onClick={()=> this.cargarMas()}>Cargar mas</button>
                </>
            )
        }
    
    }


export default VerTodasPod;