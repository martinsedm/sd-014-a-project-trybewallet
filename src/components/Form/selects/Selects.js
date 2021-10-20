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
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const spendings = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currency, method, tag, handleChange, currencies } = this.props;
    return (
      <div className="row row-cols-lg-auto g-3 align-items-center">
        <label className="col-12" htmlFor="currency">
          Moeda:
          <select
            className="form-select"
            name="currency"
            id="currency"
            value={ currency }
            onChange={ handleChange }
          >
            {currencies
              .map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
          </select>
        </label>
        <label className="col-12" htmlFor="method">
          Método de pagamento:
          <select
            className="form-select"
            name="method"
            id="method"
            value={ method }
            onChange={ handleChange }
          >
            {paymentMethod.map((methodPay) => (
              <option key={ methodPay } value={ methodPay }>{methodPay}</option>))}
          </select>
        </label>
        <label className="col-12" htmlFor="tag">
          Tag:
          <select
            className="form-select"
            name="tag"
            id="tag"
            value={ tag }
            onChange={ handleChange }
          >
            {spendings.map((spending) => (
              <option key={ spending } value={ spending }>{spending}</option>))}
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
