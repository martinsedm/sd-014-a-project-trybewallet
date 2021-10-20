import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, total, expenses } = this.props;
    return (
      <header className="flex flex-col items-center mb-8 pt-4">
        <section className="border-solid border-2 border-gray-500 p-4 rounded shadow-lg">
          <div>
            <span data-testid="email-field">
              { email }
            </span>
          </div>
          <div className="flex space-x-1">
            <span data-testid="total-field">
              Total:
              { (expenses.length > 0) ? total.toFixed(2) : 0 }
            </span>
            <span data-testid="header-currency-field">
              BRL
            </span>
          </div>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
  total: expenses.reduce((total, { value, currency, exchangeRates }) => total
    + value * exchangeRates[currency].ask, 0),
});

export default connect(mapStateToProps)(Header);
