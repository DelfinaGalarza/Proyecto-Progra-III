import React, { Component } from 'react'
import Canciones from '../Canciones/Canciones'
import Search from '../../components/Search/Search'

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


export default Home