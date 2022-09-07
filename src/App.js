import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DetalleAlbum from './components/DetalleAlbum/DetalleAlbum';
import DetalleCancion from './components/DetalleCancion/DetalleCancion';

function App() {

const paginas = ["Home", "Favoritos", "Vertodas"]
const nombre = "Beatz"


return (
<>
<NavBar paginas={paginas} nombre={nombre}/>

<main>

<h2> ALBUMES</h2>
<DetalleAlbum/>
<h2> CANCIONES</h2>
<DetalleCancion/>

</main>
<Footer/>

</>
);
}

export default App;