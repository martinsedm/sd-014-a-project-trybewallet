import React, { Component } from 'react';
// import { connect } from 'react-redux';

import FetchApi from './FetchApi';

class FormAddExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: 0,
      description: 'Adicione uma descrição',
      payment: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { expense, description, payment, tag } = this.state;
    return (
      <form>
        <label htmlFor="expense">
          Valor
          <input
            type="text"
            name="expense"
            id="expense"
            value={ expense }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select name="payment" id="payment" value={ payment }>
            <option selected value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de Crédito</option>
            <option value="debit-card">Cartão de Débito</option>
          </select>
        </label>
        <FetchApi />
        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } id="tag">
            <option selected value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="healthCare">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

// function mapStateToProps(state) {
//   return {

//   };
// }

export default FormAddExpenses;
