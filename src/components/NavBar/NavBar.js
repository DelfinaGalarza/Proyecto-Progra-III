import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'


function NavBar(props) {
  return (
  


    <header class="responsiveheader">
      
        <section class="cajainicio">
        <div className='titlog'>
    <title>SOUND-NOW</title>
    <img src="./img/arriba.png" alt="" />
    </div>
            <article className="header-items">
                <article className="BarraDeBusqueda">
                  <div className='menu'>
                        <div > <Link to="/" exact="true"> HOME </Link></div>
                        <div >  <Link to="/favoritos" exact="true"> FAVORITOS</Link></div>
                        <div > <Link to="/vertodas"> VER TODAS</Link> </div>
                        </div>
                            {/* <form action="search-results.html" method="GET" class="buscar">
                              <input type="text" name="search" placeholder="¿Qué estás buscando?" value="">
                              <button type="submit" class="button">Buscar</button>
                               <p class= "aviso"></p>
                            </form> */}
                        </article>
                </article>
         
        </section>
    </header>

  )
}

export default NavBar