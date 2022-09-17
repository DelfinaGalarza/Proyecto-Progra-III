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
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=8')
            .then( res => res.json())
            .then( data => {
                console.log('Esta es la data inicial');
                console.log(data);
                this.setState({
                albumes: data.data,
                backup: data.data,
                ready:true
            })})
            .catch(e => console.log(e)
            )
    }
    
    // seteamos el estado inicial
    

    borrar(name){
    let albumesFiltrados = this.state.albumes.filter(unalbum => unalbum.name !== name);
    this.setState({
        albumes: albumesFiltrados
    })
    }

    //para q


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
            </>
        )
    }

}


export default Albumes