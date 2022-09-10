import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'
import Search from '../Search/Search'


function Navbar(){
      return (

    <header class="responsiveheader">
      
        <section class="cajainicio">
            <article className="header-items">
                  
                  
                        <div className="home"> <Link to="/" exact="true"> HOME </Link></div>
                        <div className="home">  <Link to="/favoritos" exact="true"> FAVORITOS</Link></div>
                        <div className="home"> <Link to="/vertodas"> VER TODAS</Link> </div>
                
                        <Search/>
                        <div className="home"> <img className="logo" src="./img/ritmo-parcial.jpg" alt="logo" /></div>
                        
                            {/* <form action="search-results.html" method="GET" class="buscar">

                              <input type="text" name="search" placeholder="¿Qué estás buscando?" value=""></input>
                              <button type="submit" class="button">Buscar</button>
                              <p class= "aviso"></p>

                            </form> */}
                        
                </article>
        
        </section>
    </header>

  )
}

export default Navbar