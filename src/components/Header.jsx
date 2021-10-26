import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { converted } from '../actions';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const convertedExpenses = converted(expenses);
    return (
      <header className="header">
        <h4
          data-testid="email-field"
          className="page-title"
        >
          {`Email: ${email}`}
        </h4>
        <h4 data-testid="total-field" className="page-title">{ convertedExpenses }</h4>
        <h4 data-testid="header-currency-field" className="page-title">BRL</h4>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
