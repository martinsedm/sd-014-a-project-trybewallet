import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectPayment extends Component {
  render() {
    const { name, id, label } = this.props;
    return (
      <form>
        <label htmlFor={ id }>
          { label }
          <select
            name={ name }
            id={ id }
            // value={ payment }
            // onChange={ this.handleChange }
          >
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
      </form>
    );
  }
}

SelectPayment.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectPayment;
