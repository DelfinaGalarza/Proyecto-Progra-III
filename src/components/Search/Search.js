import React, {Component} from 'react';
import './styles.css'


class Search extends Component{
    constructor(props){
        super(props)
        this.state={ //declaro el estado inicial
            valor:""
        }
    }

    evitarSubmit(event){
        event.preventDefault() // con esto ya no se actualiza el sitio
        console.log(event)
    }
    
    controlarCambios(event){ //metodo que se encarga de actualizar el estado
        this.setState({
            valor: event.target.value
        },
        ()=> this.props.filtrar (this.state.valor)
        )}

        render(){
            return(
                <form onSubmit={ (e)=> this.evitarSubmit(e) }>
                    <input type='text' onChange={(e) => this.controlarCambios(e)} value={this.state.valor}></input>
                </form>
            )
        }}


export default Search 