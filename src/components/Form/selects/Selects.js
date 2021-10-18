import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../../../actions';

class Selects extends Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currency, method, tag, handleChange, currencies } = this.props;
    return (
      <div>
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ handleChange }
          >
            {currencies
              .map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            name="tag"
            id="tag"
            value={ tag }
            onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchAPI()),
});

Selects.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Selects);
