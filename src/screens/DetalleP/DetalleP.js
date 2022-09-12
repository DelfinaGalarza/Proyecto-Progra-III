import React, {Component} from 'react';
import './styles.css'
import CardPodcast from '../../components/CardPodcast/CardPodcast'



class DetalleP extends Component{
        constructor(props){
            super(props)
            this.state={
                podcasts: false, //aparecer personaje
                // backup:[],
                // ready:false,
                id: Number(props.match.params.id),
            }
            console.log(this.state.id)
        }

    componentDidMount(){
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/podcast/${this.state.id}`
           
        fetch(url)
         .then( res => res.json())
            .then (data =>   this.setState(
                {  podcasts: data}
            ))
            .catch(e => console.log(e)
            )
     }
     
    render(){
        console.log(this.state.podcasts);
        
        return(
            <React.Fragment>
              { this.state.podcasts ?
            <>
             <h1> {this.state.podcasts.title}</h1>
            <img className="img" src={this.state.podcasts.picture} alt="" /> 
                
                <p>{this.state.podcasts.description}</p>  
            </>:
            <p> Cargando</p>
            }
             
            </React.Fragment>

        )
    }

}

export default DetalleP