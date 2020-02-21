import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Contato extends Component {
  render() {
    return(
        <div className="home" id="contato">
            <h1>Entre em Contato</h1>
            <h2>Telefone: (11) 99999-9999</h2>
            <h3>Rua: Alguma rua, numero 9999</h3>
            <Link smooth to="#home">Voltar para Home</Link>
        </div>
    )
  }
}
export default Contato;