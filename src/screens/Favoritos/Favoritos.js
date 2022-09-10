import React, { Component } from 'react'
import CardPodcast from '../../components/CardPodcast/CardPodcast'



class Favoritos extends Component{
  constructor(){
      super()
      this.state={
        podcastsYalbumes:[], 
      }
  }

  componentDidMount(){
      let fav =[];
      let favStorage = localStorage.getItem('favoritos')

      if(favStorage !== null){
          fav = JSON.parse(favStorage) //parseamos el storage para obtener el array
          let favOk = [];

          //recorro array y pedirla en el endpiont por los datos de cada fav
          fav.forEach(unIdFavorito => { 
            let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${unIdFavorito}`
            let url2= `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/podcast/${unIdFavorito}`
            fetch(url + url2)
            .then(resp => resp.json())
              .then( data => favOk.push(data))
              .then(() => this.setState({
                podcastsYalbumes: favOk
              }))
            .catch(e => console.log(e))
          })
        }
  }
//hago fetch dentro de bucle 
  //         Promise.all( //posibilita recibir un array completo de promesas que se cumplen o fallan con el map retornamos una promesa que es fectch
  //           parsedArr.map(elm => {
  //             return(fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${elm}`) //elm es cada id del array
  //             .then(resp => resp.json())
  //             .then( data =>{
  //               console.log(data);
  //               this.setState({
  //               favoritos: this.state.favoritos.concat(data)
  //           })})
  //           .catch(e => console.log(e)
  //           ))
  //     }))
  //   }
  // }
  //   //pasarlo a un estado y esto a un map de cards que lo renderice. 

  render(){
    console.log(this.state.podcastsYalbumes)
  return(
          <React.Fragment>
          
                    <h2>Mis Albumes favoritos</h2>
                    <section>
                      {this.state.podcastsYalbumes.map((unfav, idx) => <CardPodcast key={unfav + idx} datosfav={unfav}/>) }
                    </section>
                    
          </React.Fragment>
    
  )
}
}
        
    
export default Favoritos