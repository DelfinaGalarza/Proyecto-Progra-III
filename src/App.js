import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import Favoritos from './screens/Favoritos/Favoritos';
import DetalleA from './screens/DetalleA/DetalleA';
import DetalleC from './screens/DetalleC/DetalleC'
import Search from './components/Search/Search';




function App() {
return (
  <div>
    <NavBar/>
  <Search/>
    <Switch>
          <Route path ='/' exact component={Home}/>
          <Route path='/favoritos' component={Favoritos} />
          <Route path='/DetalleC/:id' component={DetalleC} />
          <Route path='/DetalleA/:id' component={DetalleA} />
        
      </Switch>
      <Footer/>
  </div>
  );
  }

export default App;