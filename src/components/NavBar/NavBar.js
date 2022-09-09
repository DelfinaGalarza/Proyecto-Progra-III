import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'


function NavBar(props) {
  return (
  


    <header class="responsiveheader">
      
        <section class="cajainicio">
            <article className="header-items">
                  
                        <div className="home"> <img className="logo" src="./img/ritmo-parcial.jpg" alt="logo" /></div>
                        <div className="home"> <Link to="/" exact="true"> HOME </Link></div>
                        <div className="home">  <Link to="/favoritos" exact="true"> FAVORITOS</Link></div>
                        <div className="home"> <Link to="/vertodas"> VER TODAS</Link> </div>
                      
                            {/* <form action="search-results.html" method="GET" class="buscar">
                              <input type="text" name="search" placeholder="¿Qué estás buscando?" value="">
                              <button type="submit" class="button">Buscar</button>
                              <p class= "aviso"></p>
                            </form> */}
                        
                </article>
        
        </section>
    </header>

  )
}

export default NavBar