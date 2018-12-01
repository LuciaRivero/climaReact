import React, { Component } from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';

class App extends Component {
  datosConsulta = respuesta => {
    console.log(respuesta);
  }

  render() {
    return (
      <div className="app">
        <Header
          titulo = 'Clima'
        />
        <Formulario
          datosConsulta = {this.datosConsulta}
        />
      </div>
    );
  }
}

export default App;
