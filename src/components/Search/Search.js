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
// Con esto evitas que la pagina se refreshee cada vez que hay un input

    controlarCambios(event){
        console.log(event);
        this.setState({
            valor: event.target.value
        }
        )
    }
    //Con esto
    
render(){
    return(
    <>
        <form onSubmit= {(e)=> this.evitarSubmit(e)}>
            <input type='text' onChange={(e) => this.controlarCambios(e)}
            value={this.state.valor}/>
            <button onClick={(d)=> this.buscar(d)} > </button>

        </form>

        {this.state.resultados.length > 0 ?this.state.resultados.map(resultado => (<p>{resultado.title}</p>)) :   <iframe src="https://giphy.com/embed/L05HgB2h6qICDs5Sms" />
 
    }
        </>

    )
}
}


export default Search