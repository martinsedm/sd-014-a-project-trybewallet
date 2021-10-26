import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { totalExpense } from '../helper';

class Header extends React.Component {
  render() {
    const { user, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{user}</p>
        <span data-testid="total-field">{totalExpense(expenses)}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
