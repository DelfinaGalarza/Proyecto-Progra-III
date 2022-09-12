import React, {Component} from 'react';
import './styles.css'
import CardPodcast from '../../components/CardPodcast/CardPodcast'



class DetalleP extends Component{
        constructor(props){
            super(props)
            this.state={
                podcasts:[], //aparecer personaje
                // backup:[],
                // ready:false,
                id: Number(props.match.params.id),
            }
            console.log(this.state.id)
        }

    componentDidMount(){
        let podcastsOk = []
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/podcast/${this.state.id}`
           
        fetch(url)
        .then( res => res.json())
            .then( data => podcastsOk.push (data))
            .then (data =>   this.setState(
                {  podcasts: podcastsOk}
                // albumes: data.data,
                // backup: data.data,
                // ready:true
            ))
            .catch(e => console.log(e)
            )
        console.log(this.state.podcasts)
     }

    render(){

        
        return(
            <React.Fragment>
            
                {this.state.podcasts.map ((unPodcast, idx)=> <CardPodcast key={unPodcast + idx} datosPodcast={unPodcast}/>)}
            </React.Fragment>

        )
    }

}

export default DetalleP