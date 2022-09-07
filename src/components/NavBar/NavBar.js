import React from 'react'
import {Link} from 'react-router-dom';

function NavBar(props) {
  return (
    
    <header >
      <div className='nav'>
      <div > <Link to="/" exact="true"> HOME </Link></div>
      <div >  <Link to="/favoritos" exact="true"> FAVORITOS</Link></div>
      <div > <Link to="/vertodas"> VER TODAS</Link> </div>
      </div>
      
    </header>
  )
}

export default NavBar