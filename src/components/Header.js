import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user, wallet } = this.props;
    console.log('wallet:', wallet);
    const totalExpent = wallet.expenses.reduce((acc, cur) => {
      acc += Number(cur.value) * Number(cur.exchangeRates[cur.currency].ask);
      return acc;
    }, 0);
    return (
      <header>
        <h1 data-testid="email-field">{ user.email }</h1>
        <span data-testid="total-field">{ totalExpent }</span>
        <span data-testid="header-currency-field"> BRL </span>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(Header);
