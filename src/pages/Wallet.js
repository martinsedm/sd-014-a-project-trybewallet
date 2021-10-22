import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import { getApiCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  render() {
    const { email } = this.props;
    return (
      <main>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <Form />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  addCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrencies: () => dispatch(getApiCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
