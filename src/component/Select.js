import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Select extends Component {
  render() {
    const { currencies, isFetching, handleChange } = this.props;
    return (
      <>
        <label htmlFor="input-moeda">
          Moeda
          <select name="currency" id="input-moeda" onChange={ handleChange }>
            {!isFetching
            && currencies.map((moeda, index) => <option key={ index }>{moeda}</option>)}
          </select>
        </label>
        <label htmlFor="input-payment">
          Método de pagamento
          <select name="method" id="input-payment" onChange={ handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select name="tag" id="input-tag" onChange={ handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

Select.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

export default connect(mapStateToProps, null)(Select);
