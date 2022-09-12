import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import Favoritos from './screens/Favoritos/Favoritos';
import DetalleA from './screens/DetalleA/DetalleA';
import DetalleP from './screens/DetalleP/DetalleP'
import verTodas from './screens/verTodas/VerTodas';
import NotFound from './screens/NotFound/NotFound';
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
          <Route path='/verTodas' component={verTodas} />
          <Route path='/Search' component={Search} />


        <Route path= '' component= {NotFound}/>        
      </Switch>
      <Footer/>
  </div>
  );
  }

export default App;