import React, { Component } from 'react'
import CardAlbum from '../../components/CardAlbum/CardAlbum'
import './styles.css'


class Favoritos extends Component{
  constructor(props){
      super(props)
      this.state={
        albumesFav:[], 
        PodcastsFav:[]
      }
  }

  componentDidMount(){
  
    let favStorage = localStorage.getItem('favoritos')

      if(favStorage !== null){
          let favoritos  = JSON.parse(favStorage) //parseamos el storage para obtener el array

          Promise.all(
            favoritos.map(id =>{
              return( //el map nos retona un array de promesas completas al promise all
                fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
                .then(resp => resp.json())
              )           
            })
          )
          .then(data => this.setState({
            albumesFav: data
          }, ()=>{ 
            console.log('Esta es la info del estado de favs')
            console.log(this.state.albumesFav)}))
          .catch(err => console.log(err))
      }
    }

  render(){
    console.log('hola')

  return(
          <React.Fragment>
          
                    <h2>Mis Albumes favoritos</h2>
                    <section className="card-container">
                      {this.state.albumesFav.length > 0 ?
                      this.state.albumesFav.map((unAlbum, idx) => <CardAlbum key={unAlbum + idx} datosAlbum={unAlbum}/>) :
                      <h1>No tienes favoritos, ve a home y agregalos</h1>}
                    </section>
          </React.Fragment>
    
  )
}
}
        
    
export default Favoritos