import React, {Component} from 'react';

class DetalleCancion extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        // console.log(this.props);
        return(
            <article >
                <img src={this.props.datosCancion.album.cover} alt="" />
                <h2>{this.props.datosCancion.title}</h2> {/* Nombre */}
                <p>{this.props.datosCancion.artist.name}</p> {/* Estado */}
                <p>{this.props.datosCancion.album.title}</p> {/* Especie */}
                {/* <p className='more'>Ver más</p>  */}
                {/* <section className='extra'>
                    <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
                </section> */}
                <p className='delete' onClick={()=>this.props.borrar(this.props.datosCancion.id)}>Borrar</p>
            </article>

        )
    }

}

export default DetalleCancion