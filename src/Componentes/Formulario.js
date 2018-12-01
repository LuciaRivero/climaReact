import React, { Component } from 'react';

class Formulario extends Component {
    //crear los refs 
    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) => {
        e.preventDefault();
        // leer los refs y crear el objeto
        const respuesta = {
            cuidad: this.cuidadRef.current.value,
            pais: this.paisrRef.current.value
        }
        console.log(respuesta);
        // enviar por props
        this.props.datosConsulta(respuesta);
        //reset form (opcional)
    }

    render() { 
        return ( 
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 n8 l4 offset-m2">
                                <input ref={this.cuidadRef} id="cuidad" type="text"/>
                                <label htmlFor="cuidad">Cuidad</label>
                            </div>
                            <div className="nput-field col s12 n8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value="" defaultValue>Elige un pais</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">Mexico</option>
                                    <option value="PE">Perù</option>
                                </select>    
                            </div>
                            <div className="input-field col s12 n8 l4 offset-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         )
    }
}
 
export default Formulario;

