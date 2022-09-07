import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';



function App() {

const paginas = ["Home", "Favoritos", "Vertodas"]
const nombre = "Beatz"


return (
<>
<NavBar paginas={paginas} nombre={nombre}/>
<Home/>
<Footer/>
</>
);
}

export default App;