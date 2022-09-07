import React, {Component} from 'react';
import DetalleAlbum from '../DetalleAlbum/DetalleAlbum';
//import Filtro from "../Filtro/Filtro";

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

    // filtrarTarjetas(nombreBuscado){
    //     let cancionesFiltradas= this.state.backup.filter(cancion => cancion.title.toLowerCase().includes(nombreBuscado.toLowerCase()));
    //     this.setState({
    //     canciones: cancionesFiltradas
    //     })

    //}
    
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

    // borrar(id){
    // let cancionesFiltradas = this.state.canciones.filter(unaCancion => unaCancion.id !== id);
    // this.setState({
    //     canciones: cancionesFiltradas
    // })
    // }


    render(){
        return(
            <>
            {/* <Filtro filtro ={(nombreBuscado)=> this.filtrarTarjetas(nombreBuscado)} /> */}
            
                {/* <button onClick={()=>this.traerMas()}> Traer más </button> */}
        
                <section className="card-container">
                    
                    { 
                    this.state.ready ?
                        this.state.albumes.map( (unAlbum, idx) => <DetalleAlbum key={unAlbum +idx} datosAlbum ={unAlbum} />)
                    : 'Cargando'
                    }
                </section>
            
            </>
        )
    }

}


export default Albumes