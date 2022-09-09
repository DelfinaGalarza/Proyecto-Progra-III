import React, { Component } from 'react'
import Albumes from '../../components/Albumes/Albumes'
import Canciones from '../../components/Canciones/Canciones'
// import DetalleCancion from '../../components/DetalleCancion/DetalleCancion'


class Home extends Component {
  render() {
    return (
      
      <>
      <section class="todo">
        <article class="art">

            <h2 class="titulo">Canciones</h2>

            <ul class="canciones" id="w">
            <li> <Albumes/></li>
            </ul>
       
        </article>
        <article class="art">
            <h2 class="titulo">Álbumes</h2>
            <ul class="album" id="w">
            <li> <Canciones /></li></ul>
            </article>
            </section>
      
       
    
        {/* <DetalleCancion /> */}
      </>
  
    )
  }
}


export default Home;