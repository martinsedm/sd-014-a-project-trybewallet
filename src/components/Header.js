import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ user, expenses }) => {
  const totalShownExpenses = expenses
    .reduce((acc, { value, currency, exchangeRates }) => (
      acc + Number(value) * Number(exchangeRates[currency].ask)
    ), 0);

  return (
    <header>
      <Link className="logo" to="/">
        <h4>TRYBEWALLET</h4>
      </Link>
      <div className="header__info">
        {user ? (
          <h5 data-testid="email-field">
            Email:
            <p>{user}</p>
          </h5>
        ) : (
          <Link className="logo" to="/">
            <h5 data-testid="email-field">Login</h5>
          </Link>
        )}
        <div className="expenses__info">
          <h5>Despesa Total:</h5>
          <p data-testid="total-field">{ totalShownExpenses }</p>
          <h5 data-testid="header-currency-field">BRL</h5>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ user, wallet }) => (
  { user: user.email, expenses: wallet.expenses }
);

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps)(Header);
