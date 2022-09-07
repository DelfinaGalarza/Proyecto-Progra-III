import React, {Component } from 'react'
import Albumes from './components/Albumes/Albumes';
import Canciones from './components/Canciones/Canciones';


class Home extends Component {
    constructor(props){
        super(props)
        this.state= {
            canciones: [],
            albumes: [],
            search: [],        }
    }}


<main>

<h2> ALBUMES</h2>
<Albumes/>
<h2> CANCIONES</h2>
<Canciones/>

</main>


export default Home;