import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'


function Navbar(){
      return (

    <header class="responsiveheader">
        <section class="cajainicio">
            <h1 className='tituloprin'>¡ RHYTHM !</h1> 

                  
            <article className="header-items">

                        <div className="home"> <Link to="/" exact="true"> HOME </Link></div>
                        <div className="home">  <Link to="/favoritos" exact="true"> FAVORITOS</Link></div>
                        <div className="home"> <Link to="/vertodas/albumes"> ALBUMES</Link> </div>
                        <div className="home"> <Link to="/vertodas/podcast">PODCASTS</Link> </div>
                
                        <div className="home"> 
                        
                        <Link to= "/"> <img className="logo" src="./img/ritmo-parcial.jpg" alt="logo" /></Link> 
                        
                        </div>
                        
                     
                        
                </article>
        
        </section>
    </header>

  )
}

export default Navbar