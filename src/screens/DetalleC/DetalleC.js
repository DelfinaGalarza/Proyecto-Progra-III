import React, {Component} from 'react';
import './styles.css'
import CardCancion from '../../components/CardCancion/CardCancion'




class DetalleC extends Component{
    
        constructor(props){
            super(props)
            this.state={
                canciones:[], //aparecer personaje
                // backup:[],
                // ready:false,
                id: Number(props.match.params.id),
            }
            console.log(this.state.id)
        }

    componentDidMount(){
        let cancionesOk = []
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`
        fetch(url)
        .then( res => res.json())
            .then( data => cancionesOk.push (data))
            .then (data =>   this.setState(
                {  canciones: cancionesOk}
                // albumes: data.data,
                // backup: data.data,
                // ready:true
            ))
            .catch(e => console.log(e)
            )
        console.log(this.state.canciones)
     }

    render(){

        
        return(
            <React.Fragment>
            
                {this.state.canciones.map ((unCancion, idx)=> <CardCancion key={unCancion + idx} datosCancion={unCancion}/>)}
            </React.Fragment>

        )
    }

}

export default DetalleC