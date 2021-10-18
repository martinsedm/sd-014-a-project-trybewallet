import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  /* constructor() {
    super();

    this.state = {
      currencies: [],
      expenses: [],
    };
  } */

  render() {
    const { email } = this.props;
    return (
      <header>
        TrybeWallet
        <div data-testid="email-field">
          {`Email: ${email}`}
        </div>
        <div data-testid="total-field">
          {`Despesa Total: R$ ${0}`}
        </div>
        <span data-testid="header-currency-field">BRL</span>

      </header>);
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  /* expenses: PropTypes.string.isRequired, */
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
