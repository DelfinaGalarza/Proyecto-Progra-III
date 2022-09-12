import React, {Component} from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state= {
            valor:'',
            resultados:[],
        }
    }

    

    buscar(event){

        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.state.valor}`)
            .then( res => res.json())
            .then( data => {
                console.log('Esta es la data inicial');
                console.log(data);
                this.setState({
                resultados: data.data,
            })})
            .catch(e => console.log(e)
            )
    

    }


    evitarSubmit(event){
        event.preventDefault()
        console.log(event)
    }

    controlarCambios(event){
        console.log(event);
        this.setState({
            valor: event.target.value
        }
        )
    }
       
render(){
    return(
       <>
        <form onSubmit= {(e)=> this.evitarSubmit(e)}>
            <input type='text' onChange={(e) => this.controlarCambios(e)}
            value={this.state.valor}/>
            <button onClick={(d)=> this.buscar(d)} > </button>

        </form>
        {this.state.resultados.length > 0 ?this.state.resultados.map(resultado => (<p>{resultado.title}</p>)) : <p>Cargando</p>}
        </>

    )
}
}


export default Search