import React, { Component } from 'react'
import Albumes from '../../components/Albumes/Albumes'
import Podcasts from '../../components/Podcasts/Podcasts'
import './styles.css'



class Home extends Component {
render() {
    return (
    
    <>
    <section className="todo">
        <article class="titulo-container">

            <h2 className="titulo">Álbumes</h2>
            </article>
        <article class="card-container">
            <Albumes/>
            </article>

        <article className="titulo-container">
        <h2 className="titulo">Podcasts</h2>
            </article>

            <article class="card-container">
            <Podcasts />
            </article>
        </section>
    
    
    </>

    )
}
}


export default Home;