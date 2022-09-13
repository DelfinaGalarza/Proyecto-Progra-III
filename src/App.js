import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import Favoritos from './screens/Favoritos/Favoritos';
import DetalleA from './screens/DetalleA/DetalleA';
import DetalleP from './screens/DetalleP/DetalleP'
import verTodasP from './screens/verTodasP/VerTodasP';
import VerTodasPod from './screens/VerTodasPod/VerTodasPod';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';



function App() {
return (
  <div>
  <NavBar/>
    <Switch>
          <Route path ='/' exact component={Home}/>
          <Route path='/favoritos' component={Favoritos} />
          <Route path='/DetalleP/:id' component={DetalleP} />
          <Route path='/DetalleA/:id' component={DetalleA} />
          <Route path='/verTodas/peliculas' component={verTodasP} />
          <Route path='/verTodas/podcast' component={VerTodasPod} />
          <Route path='/Search' component={Search} />


        <Route path= '' component= {NotFound}/>        
      </Switch>
      <Footer/>
  </div>
  );
  }

export default App;