import React, { Component } from 'react'
import CardCancion from '../../components/CardCancion/CardCancion'



class Favoritos extends Component{
  constructor(){
      super()
      this.state={
          favoritos:[], 
      }
  }

  componentDidMount(){
      let favStorage = localStorage.getItem('favoritos')

      if(favStorage !== null){
          let parsedArr = JSON.parse(favStorage) //parseamos el storage para obtener el array
//hago fetch dentro de bucle 
          Promise.all( //posibilita recibir un array completo de promesas que se cumplen o fallan con el map retornamos una promesa que es fectch
            parsedArr.map(elm => {
              return(fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${elm}`) //elm es cada id del array
              .then(resp => resp.json())
              .then( data =>{
                console.log(data);
                this.setState({
                favoritos: this.state.favoritos.concat(data)
            })})
            .catch(e => console.log(e)
            ))
      }))
    }
  }
    //pasarlo a un estado y esto a un map de cards que lo renderice. 

  render(){
  return(
    <section className="card-container" >
                    
                    { 
                    this.state.favoritos ?
                        ( (fav, idx) => <CardCancion key={fav +idx} favoritos ={fav} />)
                    : 'Cargando'
                    }
                </section>
  )
}
}
        
    
export default Favoritos