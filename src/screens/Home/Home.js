import React, { Component } from 'react'
import Canciones from '../../screens/Canciones/Canciones'
import Search from '../../screens/Search/Search'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

render(){
    return (
        <div>
            <Search />
            <h2>Canciones:</h2>
            <Canciones />
        </div>
        )
    }
}


export default Home;