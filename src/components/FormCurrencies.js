import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchApiThunk from '../actions/fetchApiAction';

class FormCurrencies extends Component {
  componentDidMount() {
    const { setFetchApi } = this.props;
    setFetchApi();
  }

  render() {
    const { currencies } = this.props;
    return (
      <label htmlFor="coin">
        Moeda:
        <select id="coin">
          {currencies.map((e, id) => (
            <option key={ id } value={ e }>
              { e }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToprops = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchApi: () => dispatch(fetchApiThunk()),
});

FormCurrencies.propTypes = ({
  setFetchApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default connect(mapStateToprops, mapDispatchToProps)(FormCurrencies);
