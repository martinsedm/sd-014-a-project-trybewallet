import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { currency, exchangeRates, value }) => {
      const { ask } = exchangeRates[currency];
      return acc + (ask * value);
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header className="header">
          <img src="https://course.betrybe.com/images/trybe-logo-e10dbaaa26462aa149b81a924b00df07.png?vsn=d" alt="trybe-logo" />
          <p data-testid="email-field">{ email }</p>
          <p
            data-testid="total-field"
          >
            {`Despesa Total: R$ ${this.sumExpenses().toFixed(2)} BRL`}

          </p>
        </header>

      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
