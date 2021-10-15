import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../actions/index';
import fetchAPI from '../services/awesomeapi';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      expense: 0,
      description: '',
      coin: '',
      paymentMethod: '',
      tag: '',
      arr: [],
    };
  }

  async componentDidMount() {
    await this.handleAPI();
  }

  handleAPI = async () => {
    const api = await fetchAPI();
    const arrAPI = Object.entries(api);
    const arrAPIfiltered = arrAPI.filter((curr) => curr[0] !== 'USDT');
    this.setState({ arr: arrAPIfiltered });
  };

  render() {
    const { expense, description, coin, paymentMethod, tag, arr } = this.state;

    return (
      <form>
        <label htmlFor="expense">
          Valor
          <input type="number" name="expense" value={ expense } id="expense" />
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" name="description" value={ description } id="description" />
        </label>

        <label htmlFor="coin">
          Moeda
          <select name="coin" value={ coin } id="coin">
            {arr.map((curr, i) => (
              <option key={ i } value={ curr[0] }>
                {curr[0]}
              </option>))}
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento
          <select name="paymentMethod" value={ paymentMethod } id="paymentMethod">
            <option id="cash">Dinheiro</option>
            <option id="credit-card">Cartão de crédito</option>
            <option id="debit-card">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } id="tag">
            <option id="food">Alimentação</option>
            <option id="leisure">Lazer</option>
            <option id="work">Trabalho</option>
            <option id="transport">Transporte</option>
            <option id="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(null, mapDispatchToProps)(Form);
