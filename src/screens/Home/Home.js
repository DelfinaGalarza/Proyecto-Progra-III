import React, { Component } from 'react'

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
<DetalleAlbum/>
<h2> CANCIONES</h2>
<DetalleCancion/>

</main>


export default Home