import React, {Component} from 'react';
import './styles.css'
//import DetalleCancion from '../DetalleCancion/DetalleCancion';
//import Filtro from "../Filtro/Filtro";

class Canciones extends Component{
    constructor(){
        super()
        this.state={
            canciones:[], //aparecer personaje
            backup:'',
            ready:false,
        }
    }

    componentDidMount(){
        //Buscamos datos
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks')

            .then( res => res.json())
            .then( data =>this.setState({
                canciones: data.data,
                backup: data.data,
                ready:true
            }))
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


     /*render(){
        return(
            <>
            {/* <Filtro filtro ={(nombreBuscado)=> this.filtrarTarjetas(nombreBuscado)} /> */}
            
                {/* <button onClick={()=>this.traerMas()}> Traer más </button> */}
                 {/*<section className="card-container">
                    
                    { 
                    this.state.ready ?
                        this.state.canciones.map( (unCancion, idx) => <DetalleCancion key={unCancion +idx} datosCancion ={unCancion} />)
                    : 'Cargando'
                    }
                </section>
            
            </>
        )
    }

}*/}



export default Canciones

