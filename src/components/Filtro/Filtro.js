import React, {Component} from 'react'
import Search from '../Search/Search'

class Filtro extends Component {
    constructor(props){
        super(props)
        this.state={
            valor:""
    }
}

evitarRefresh(event){
    event.preventDefault()
}

guardarCambios(event){
    this.setState({
        valor: event.target.value
    }, ()=> this.props.filtro(this.state.valor))
}

render(){
    return(
        <form onSubmit={(e) => this.evitarRefresh (e)}>
            {/* <input type={'text'} onChange={(e) => this.guardarCambios(e)} value={this.state.valor} ></input> */}
        </form>
    )}}

    //     <React.Fragment>
            
    //     {this.state.albumes.map ((unAlbum, idx)=> <Search key={unAlbum + idx} nombreBuscado={unAlbum}/>)}
    // </React.Fragment>

    // )}}
/* <section className="card-container">
                    
{ 
this.state.valor.length > 0?
    this.state.valor.map( (Buscado, idx) => <Search key={Buscado +idx} datosSearch={Buscado} />)
: 'Cargando'
}
</section> */
    



export default Filtro 