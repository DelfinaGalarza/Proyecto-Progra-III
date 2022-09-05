import React, {Component} from 'react';
import DetalleCancion from '../DetalleCancion/DetalleCancion';
import Filtro from "../Filtro/Filtro";

class Canciones extends Component{
    constructor(){
        super()
        this.state={
            canciones:[], //aparecer personajes
            nextUrl:'',
            backup:''
        }
    }

    componentDidMount(){
        //Buscamos datos
        fetch('https://api.deezer.com/chart')
            .then( res => res.json())
            .then( data => this.setState({
                canciones: data.results,
                backup: data.results,
                nextUrl: data.info.next
            }))
            .catch()
    }

    filtrarTarjetas(nombre){
        let cancionesFiltradas= this.state.backup.filter(cancion => cancion.name.toLowerCase().includes(nombre.toLowerCase()));
        this.setState({
        canciones: cancionesFiltradas
        })

    }
    
    traerMas(){
        //Traer la siguiente página de personajes
        fetch(this.state.nextUrl)
            .then( res => res.json())
            .then( data => this.setState({
                canciones: data.results.concat(this.state.canciones),
                nextUrl: data.info.next
            }))
            .catch()
    }

    borrar(id){
    let cancionesFiltradas = this.state.personajes.filter(unaCancion => unaCancion.id !== id);
    this.setState({
        canciones: cancionesFiltradas
    })
    }


    render(){
        console.log(this.state.personajes);
        return(
            <>
        <Filtro filtro ={(nombre)=> this.filtrarTarjetas(nombre)} />
            <React.Fragment>
                <button onClick={()=>this.traerMas()}> Traer más </button>
                <section>
                    { 
                        this.state.canciones.map( (unaCancion, idx) => <DetalleCancion key={unaCancion.name+idx} datosCancion ={unaCancion} borrar={(id)=>this.borrar(id)}/>)
                    }
                </section>
            </React.Fragment>
            </>
        )
    }

}


export default Canciones