import React, { Component } from 'react'
import Albumes from '../../components/Albumes/Albumes'
import Canciones from '../../components/Canciones/Canciones'
// import DetalleCancion from '../../components/DetalleCancion/DetalleCancion'


class Home extends Component {
  render() {
    return (
      <>
        <Albumes />
        <Canciones />
        {/* <DetalleCancion /> */}
      </>
    )
  }
}


export default Home;