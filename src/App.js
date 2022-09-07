import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DetalleAlbum from './components/DetalleAlbum/DetalleAlbum';
import DetalleCancion from './components/DetalleCancion/DetalleCancion';
import Home from './screens/Home/Home';



function App() {

const paginas = ["Home", "Favoritos", "Vertodas"]
const nombre = "Beatz"


return (
<>
<NavBar paginas={paginas} nombre={nombre}/>


<Footer/>

</>
);
}

export default App;