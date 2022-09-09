import React, {Component} from 'react';
import './styles.css'

class Search extends Component{
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
        () => this.props.filtrar(this.state.valor)
        )
    }

        render(){
            return(
                <section>

                <form className="search-form" onSubmit={ (e)=> this.evitarSubmit(e) }>
                    <input className="search-form_input" type='text' onChange={(e) => this.controlarCambios(e)} value={this.state.valor}></input>
                    <button onClick={() => this.buscar()}className="search-form_button">BUSCAR</button>
                </form>
                </section>
            )
        }}


export default Search 