import React, { Component } from 'react'
import CardAlbum from '../../components/CardAlbum/CardAlbum'
//import CardPodcast from '../../components/CardPodcast/CardPodcast'



class Favoritos extends Component{
  constructor(props){
      super(props)
      this.state={
        albumesFav:[], 
        cancionFav:[]
      }
  }

  componentDidMount(){
    let favStorage = localStorage.getItem('favoritos')

      if(favStorage !== null){
          let parsedStorege   = JSON.parse(favStorage) //parseamos el storage para obtener el array
          
          
          // this.setState({
          //   albumesFav: parsedStorege
          // })
          //  let aFav=[];
        Promise.all( //me trae toda la data completa
          parsedStorege.map(id => {
            return((fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)

            .then(response => response.json())
            .then(data => data)
            
            ))
          })
          ).then((data)=> this.setState({
            albumesFav: data
          }))
          catch((e)=> console.log(e))
          
        }        
          
        }
      }

  render(){
  return(
          <React.Fragment>
          
                    <h2>Mis Albumes favoritos</h2>
                    <section>
                      {this.state.albumesFav.length > 0 ?
                        this.state.albumesFav.map((elm, idx) => <h4>{idx + elm.name}</h4>)
                      map((unAlbum, idx) => <CardAlbum key={unAlbum + idx} datosAlbum={unAlbum}/>) }
                    </section>
                    {/* <h2>Mis Podcast favoritos</h2>
                    <section>
                      {this.state.cancionFav.map((unfav, idx) => <CardPodcast key={unfav + idx} datosfav={unfav}/>) }
                    </section> */}
          </React.Fragment>
    
  )
}
}
        
    
export default Favoritos



          // Promise.all(
          //   parsedStorage.map(id => { //retorna una promesa que es fetch
          //     return(fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
          //     .then(resp => resp.json())
          //     .then(data => {
          //       this.setState({
          //         albumFav: this.state.albumFav.concat(data)
          //       })})
          //       .catch(e => console.log(e)
          //                 ))
          //           }))
          //         }
          //       }
    
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
