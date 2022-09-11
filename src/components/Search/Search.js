import React, {Component} from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state= {
            valor:''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
        console.log(event)
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        },
        () => this.props.filtro(this.state.valor)
        )
    }

    render(){
        return(

                   <form onSubmit={(e)=> this.evitarSubmit(e)} action="search-results.html" method="GET" class="buscar">

                              <input onChange={(e) => this.controlarCambios(e)} value={this.state.valor} type="text" name="search" placeholder="¿Qué estás buscando?" ></input>
                              <button type="submit" class="button">Buscar</button>
                              <p class= "aviso"></p>
                            </form> 
    )}
        }
        




export default Search