import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.somaTotal = this.somaTotal.bind(this);
  }

  somaTotal() {
    const { expenses } = this.props;
    let total = 0;
    if (expenses.length > 0) {
      expenses.forEach((element) => {
        // const a = element.exchangeRates.filter((moedas) => moedas === element.currency);
        const found = Object.entries(element.exchangeRates)
          .find(([key]) => key === element.currency);
        const valorReal = found[1].ask * element.value;
        total += valorReal;
      });
      return (
        <span>
          { total }
        </span>
      );
    }
    return (
      <span>
        0
      </span>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          <span>
            { email }
          </span>
        </div>
        <div data-testid="total-field">
          {this.somaTotal()}
        </div>
        <div data-testid="header-currency-field">
          <span>
            BRL
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
