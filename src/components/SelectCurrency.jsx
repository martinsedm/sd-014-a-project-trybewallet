import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectCurrency extends Component {
  render() {
    const { name, id, label } = this.props;
    return (
      <form>
        <label htmlFor="currency">
          { label }
          <select
            name={ name }
            id={ id }
            // value={ currency }
            // onChange={ this.handleChange }
          >
            {/* {options.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))} */}
          </select>
        </label>
      </form>
    );
  }
}

export default SelectCurrency;

// <label htmlFor="payment">
//   Método de pagamento
//   <select
//     name="payment"
//     id="payment"
//     // value={ payment }
//     // onChange={ this.handleChange }
//   >
//     <option value="cash">Dinheiro</option>
//     <option value="credit">Cartão de crédito</option>
//     <option value="debit">Cartão de débito</option>
//   </select>
//   </label>
//   <label htmlFor="tag">
//   Tag
//     <select
//       name="tag"
//       id="tag"
//       // value={ payment }
//       // onChange={ this.handleChange }
//     >
//       <option value="food">Alimentação</option>
//       <option value="leisure">Lazer</option>
//       <option value="work">Trabalho</option>
//       <option value="transportation">Transporte</option>
//       <option value="health">Saúde</option>
//     </select>
//   </label>
