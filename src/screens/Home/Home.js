import React, { Component } from 'react'
import Albumes from '../../components/Albumes/Albumes'
import Canciones from '../../components/Canciones/Canciones'
import './styles.css'
// import DetalleCancion from '../../components/DetalleCancion/DetalleCancion'


class Home extends Component {
render() {
    return (
    
    <>
    <section className="todo">
        <article class="titulo-container">

            <h2 className="titulo">Canciones</h2>
            </article>
        <article class="card-container">
            <Albumes/>
            </article>

        <article className="titulo-container">
            <h2 className="titulo">Álbumes</h2>
            </article>

            <article class="card-container">
            <Canciones />
            </article>
        </section>
    
        {/* <DetalleCancion /> */}
    </>

    )
}
}


export default Home;