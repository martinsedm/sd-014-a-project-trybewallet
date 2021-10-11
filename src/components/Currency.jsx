import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Z2V0Q3VycmVuY3lUaHVuaw } from '../actions/index';

class Currency extends Component {
  componentDidMount() {
    const { Z2V0Q3VycmVuY2llcwo } = this.props;
    Z2V0Q3VycmVuY2llcwo();
  }

  render() {
    const { currencies, name, value, onChange } = this.props;
    return (
      <label htmlFor="currencies">
        Moeda
        <select name={ name } value={ value } onChange={ onChange } id="currencies">
          {currencies.length > 0 ? currencies.filter((ele) => ele !== 'USDT')
            .map((ele) => (
              <option key={ ele } value={ ele }>
                {ele}
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
    Z2V0Q3VycmVuY2llcwo: () => dispatch(Z2V0Q3VycmVuY3lUaHVuaw()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency);

Currency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  Z2V0Q3VycmVuY2llcwo: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
