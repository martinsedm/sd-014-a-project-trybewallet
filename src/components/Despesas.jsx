import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Despesas extends Component {
  render() {
    const { despesas } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {despesas.map((despesa, index) => (
              <tr key={ index } id={ index }>
                <td>{despesa.description}</td>
                <td>{despesa.tag}</td>
                <td>{despesa.method}</td>
                <td>{despesa.value}</td>
                <td>{despesa.currency}</td>
                <td>{despesa.currency}</td>
                <td>{despesa.currency}</td>
                <td>{despesa.currency}</td>
                <td>{despesa.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Despesas.propTypes = {
  despesas: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

export default Despesas;
