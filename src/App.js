import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import Favoritos from './screens/Favoritos/Favoritos';




function App() {
return (
  <div>
    <NavBar/>
    <Switch>
          <Route path ='/' component={Home}/>
          <Route path='/' component={Favoritos} />
        <Footer/>
      </Switch>
  </div>
  );
  }

export default App;