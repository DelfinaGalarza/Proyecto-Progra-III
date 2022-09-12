import React, {Component} from 'react';
import './styles.css'
import CardAlbum from '../../components/CardAlbum/CardAlbum'




class DetalleA extends Component{
        constructor(props){
            super(props)
            this.state={
                albumes:[], //aparecer personaje
                // backup:[],
                // ready:false,
                id: Number(props.match.params.id),
            }
            console.log(this.state.id)
        }

    componentDidMount(){
        let albumesOk = []
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`
    
       
        fetch(url)
        .then( res => res.json())
            .then( data => albumesOk.push (data))
            .then (data =>   this.setState(
                {  albumes: albumesOk}
                // albumes: data.data,
                // backup: data.data,
                // ready:true
            ))
            .catch(e => console.log(e)
            )
        console.log(this.state.albumes)
     }

    render(){

        
        return(
            <React.Fragment>
            
                {this.state.albumes.map ((unAlbum, idx)=> <CardAlbum key={unAlbum + idx} datosAlbum={unAlbum}/>)}
            </React.Fragment>

        )
    }

}

export default DetalleA