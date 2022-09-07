import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import Canciones from './components/Canciones/Canciones';
import DetalleCancion from './components/DetalleCancion/DetalleCancion';
import NotFound from './components/NotFound/NotFound'
import Albumes from './components/Albumes/Albumes'



function App() {
return (
  <div>
    <NavBar/>
    <Switch>
          <Route path ='/' exact={true} component={Home}/>
          <Route path = '/Canciones' component={Canciones}/>
          <Route path = '/DetalleCancion/:id' component={DetalleCancion}/>
          <Route path = '' component={NotFound}/>
        <Footer/>
      </Switch>
  </div>
  );
  }

export default App;