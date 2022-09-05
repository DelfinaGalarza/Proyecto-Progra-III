import React, { Component } from 'react'



class Favoritos extends Component{
  constructor(){
      super()
      this.state={
          canciones:[], //aparecer personajes
          nextUrl:'',
          backup:'',
          ready:false,
      }
  }

  componentDidMount(){
      let favStorage = localStorage.getItem('favoritos')

      if(favStorage !== null){
          let parsedArr = JSON.parse(favStorage)

          Promise.all(
            parsedArr.map(elm => {
              fetch('')
              .then(resp => resp.json())
              .then(data => data)
            })
          )
          .then(data => console.log(data))
      }
    }
  
  render(){
  return(<p>A</p>)
}
}
        
    
export default Favoritos