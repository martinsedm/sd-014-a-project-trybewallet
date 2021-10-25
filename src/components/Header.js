import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user, wallet } = this.props;
    const total = wallet.expenses.reduce((acc, c) => {
      acc += Number(c.value) * Number(c.exchangeRates[c.currency].ask);
      return acc;
    }, 0);
    return (
      <header>
        <p data-testid="email-field">{ user.email }</p>
        <p data-testid="total-field">{total.toFixed(2)}</p>
        <p data-testid="header-currency-field"> BRL </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
