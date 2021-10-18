import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Select extends Component {
  constructor() {
    super();

    this.state = {
      objCoins: {},
    };
  }

  componentDidMount() {
    this.getCoins();
  }

  async getCoins() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const allCoins = await response.json();
    this.setState({ objCoins: allCoins });
  }

  render() {
    const { objCoins } = this.state;
    const listCoins = Object.keys(objCoins);
    const { nome, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>
          { nome }
          :
          <select name={ nome } id={ nome } onChange={ onChange }>
            {(nome === 'moeda') && (listCoins.map((coin) => (
              (coin !== 'USDT') && (
                <option key={ coin } value={ coin }>
                  { coin }
                </option>))))}
            {(nome === 'Método de Pagamento')
            && (
              <>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão de crédito">Cartão de crédito</option>
                <option value="Cartão de débito">Cartão de débito</option>
              </>)}
            {(nome === 'tag')
            && (
              <>
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Transporte">Transporte</option>
                <option value="Saúde">Saúde</option>
              </>)}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  nome: PropTypes.string,
  onChange: PropTypes.func,
  tipo: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Select;
