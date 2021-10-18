import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { converted } from '../actions';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const convertedExpenses = converted(expenses);
    return (
      <header>
        <span data-testid="email-field">
          {email}
        </span>
        <span data-testid="total-field">
          { convertedExpenses }
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

const mapStateToProps = ({ wallet, user }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default connect(mapStateToProps, null)(Header);
