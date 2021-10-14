import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk } from '../actions/index';

class Currency extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies, name, value, onChange } = this.props;
    return (
      <label htmlFor="currencies">
        Moeda
        <select name={ name } value={ value } onChange={ onChange } id="currencies">
          {currencies.length > 0 ? currencies.filter((ele) => ele[0] !== 'USDT')
            .map((ele) => (
              <option key={ ele[0] } value={ `${ele[0]}` }>
                {ele[1].name}
              </option>
            ))
            : <option value="Null">Nenhuma opção disponível</option>}
        </select>
      </label>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrencies: () => dispatch(getCurrencyThunk()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency);

Currency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
