import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../actions/index';
import fetchAPI from '../services/awesomeapi';
import LabelInput from './LabelInput';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      expense: 0,
      description: '',
      coin: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
      arr: [],
    };
  }

  async componentDidMount() {
    await this.handleAPI();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

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
        <LabelInput
          att={ ['expense', 'Valor', 'number', expense, this.handleChange] }
        />
        <LabelInput
          att={ ['description', 'Descrição', 'text', description, this.handleChange] }
        />
        <label htmlFor="coin">
          Moeda
          <select name="coin" value={ coin } id="coin" onChange={ this.handleChange }>
            {arr.map((curr, i) => (
              <option key={ i } value={ curr[0] }>
                {curr[0]}
              </option>))}
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select
            name="paymentMethod"
            value={ paymentMethod }
            id="paymentMethod"
            onChange={ this.handleChange }
          >
            <option id="cash">Dinheiro</option>
            <option id="credit-card">Cartão de crédito</option>
            <option id="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } id="tag" onChange={ this.handleChange }>
            <option id="food">Alimentação</option>
            <option id="leisure">Lazer</option>
            <option id="work">Trabalho</option>
            <option id="transport">Transporte</option>
            <option id="health">Saúde</option>
          </select>
        </label>
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(null, mapDispatchToProps)(Form);
