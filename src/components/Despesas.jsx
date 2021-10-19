import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Despesas extends Component {
  constructor() {
    super();
    this.moeda = this.moeda.bind(this);
    this.cambio = this.cambio.bind(this);
    this.valorConvertido = this.valorConvertido.bind(this);
  }

  moeda(despesa) {
    const moedaName = despesa.exchangeRates[despesa.currency].name;
    return moedaName;
    // const REAL_LENGTH = -16;
    // const slicado = moedaName.slice(0, REAL_LENGTH);
    // console.log(moedaName);
    // if (slicado === 'Dólar Americano') {
    //   return 'Dólar Comercial';
    // }
    // return slicado;
  }

  valorConvertido(despesa) {
    const cambio = despesa.exchangeRates[despesa.currency].ask;
    return (despesa.value * cambio).toFixed(2);
  }

  cambio(despesa) {
    return (Number(despesa.exchangeRates[despesa.currency].ask)).toFixed(2);
  }

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
                <td>{this.moeda(despesa)}</td>
                <td>{`${this.cambio(despesa)}`}</td>
                <td>{`${this.valorConvertido(despesa)}`}</td>
                <td>Real</td>
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

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Despesas);
