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
        console.log('ho')
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0')
            .then( res => res.json())
            .then( data =>{
                console.log(data);
                this.setState({
                canciones: data.tracks.data,
                backup: data.tracks.data,
            })})
            .catch(e => console.log(
             e   
            ))
    }

    filtrarTarjetas(nombreBuscado){
        let cancionesFiltradas= this.state.backup.filter(cancion => cancion.title.toLowerCase().includes(nombreBuscado.toLowerCase()));
        this.setState({
        canciones: cancionesFiltradas
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
    let cancionesFiltradas = this.state.personajes.filter(unaCancion => unaCancion.id !== id);
    this.setState({
        canciones: cancionesFiltradas
    })
    }


    render(){
        return(
            <>
            {/* <Filtro filtro ={(nombreBuscado)=> this.filtrarTarjetas(nombreBuscado)} /> */}
            <React.Fragment>
                {/* <button onClick={()=>this.traerMas()}> Traer más </button> */}
                <section>
                    { 
                        this.state.canciones.map( (unaCancion, idx) => <DetalleCancion key={unaCancion.title+idx} datosCancion ={unaCancion} borrar={(id)=>this.borrar(id)}/>)
                    }
                </section>
            </React.Fragment>
            </>
        )
    }

}


export default Canciones