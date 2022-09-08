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
            }
        }

    componentDidMount(){
        // fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
        // .then( res => res.json())
        //     .then( data =>{
        //         console.log(data);
        //         this.setState({
        //         albumes: data.data,
        //         backup: data.data,
        //         ready:true
        //     })})
        //     .catch(e => console.log(e)
        //     )
        // console.log(this.props)
     }

    render(){

        return(
            <p>Hola</p>

        )
    }

}

export default DetalleA