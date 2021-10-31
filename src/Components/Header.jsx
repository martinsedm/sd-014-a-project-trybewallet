import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      cambio: 'BRL',
    };
    this.calculateValue = this.calculateValue.bind(this);
  }

  componentDidMount() {
    this.calculateValue();
  }

  calculateValue() {
    const { expenses } = this.props;
    let totalValue = 0;

    for (let i = 0; i < expenses.length; i += 1) {
      const { currency, exchangeRates } = expenses[i];
      totalValue += parseFloat(expenses[i].value * exchangeRates[currency].ask);
    }

    return totalValue;
  }

  render() {
    const { email } = this.props;
    const { cambio } = this.state;
    return (
      <nav>
        <div>
          Email:
          <p data-testid="email-field">{ email }</p>
        </div>
        <div>
          Despesa Total:
          <p data-testid="total-field">{ this.calculateValue().toFixed(2) }</p>
        </div>
        <div>
          Câmbio:
          <p data-testid="header-currency-field">{ cambio }</p>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
