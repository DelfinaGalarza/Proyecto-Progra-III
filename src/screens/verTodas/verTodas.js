import React, { Component } from 'react'
import './styles.css'
import CardAlbum from '../../components/CardAlbum/CardAlbum'
import Filtro from '../../components/Filtro/Filtro'



class VerTodas extends Component {
        constructor(props){
            super(props)
            this.state={
                albumes:[], //aparecer personaje
                backup:[],
                limite: 16,
                index: 0,
            }
        }
    
        componentDidMount(){
            console.log('Estamos en VerTodas')
            //Buscamos datos
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=${this.state.index}&limit=${this.state.limite}`)
                .then( res => res.json())
                .then( data => {
                    console.log('Esta es la data inicial');
                    console.log(data);
                    this.setState({
                    albumes: data.data,
                    backup: data.data,
                    index: this.state.limite
                })})
                .catch(e => console.log(e)
                )
        }
        cargarMas(){
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=${this.state.index}&limit=${this.state.limite}`)
            .then( res => res.json())
            .then( data => {
                this.setState({
                albumes: this.state.albumes.concat(data.data),
                backup: this.state.albumes.concat(data.data),
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
    
        filtrarAlbumes(nombre){
            let albumFiltrado= 
            this.state.backup.filter
            (album => album.title.toLowerCase().includes(nombre.toLowerCase()));

            this.setState({
            albumes: albumFiltrado
            })
    
        }
    
        render(){
            return(
                <>
                <Filtro filtro ={(nombre)=> this.filtrarAlbumes(nombre)} />        
                <section className="card-container">
    
                        { 
                            this.state.albumes.length > 0 ?
                            this.state.albumes.map( (unAlbum, idx) => 
                            <CardAlbum
                            key={unAlbum +idx} 
                            datosAlbum ={unAlbum} />)
                        : 'Cargando'
                        }
                </section>
                <button onClick={()=> this.cargarMas()}>Cargar mas</button>
                </>
            )
        }
    
    }


export default VerTodas;