import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail, userExpenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{userEmail}</p>
        <p data-testid="total-field">
          {userExpenses}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.objectOf(PropTypes.any).isRequired,
  userExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses.reduce((acc, curr) => {
    acc += curr.value * curr.exchangeRates[curr.currency].ask;
    return acc;
  }, 0),
});

export default connect(mapStateToProps, null)(Header);
