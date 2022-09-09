import React, {Component} from 'react';
import './styles.css'
import CardAlbum from '../../components/CardAlbum/CardAlbum'




class DetalleA extends Component{
        constructor(props){
            super(props)
            this.state={
                albumes:[], //aparecer personaje
                backup:[],
                ready:false,
                id: Number(props.match.params.id),
            }
            console.log(this.state.id)
        }

    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
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
        console.log(this.state)
     }

    render(){

        
        return(
            <React.Fragment>
            
                {this.state.albumes.map((unAlbum, idx)=> <CardAlbum key={unAlbum + idx} datosAlbum={unAlbum}/>)}
            </React.Fragment>

        )
    }

}

export default DetalleA