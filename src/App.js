import React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import Favoritos from './screens/Favoritos/Favoritos'



function App() {
  return (
    <div>
     <Header/>
      <Switch>
          <Route path ='/' exact={true} component={Home}/>
          <Route path ='/' component={Favoritos}/>

        </Switch>
        <Footer/>
      </div>    
  );
}

export default App;