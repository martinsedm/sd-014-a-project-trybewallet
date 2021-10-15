import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectPayment from '../components/SelectPayment';
import SelectCurrency from '../components/SelectCurrency';
import SelectTag from '../components/SelectTag';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses } = this.state;
    return (
      <>
        <header className="header-wallet">
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ totalExpenses }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <main>
          <form>
            <label htmlFor="expense-input">
              Valor
              <input type="number" id="expense-input" />
            </label>
            <label htmlFor="description-input">
              Descrição
              <input type="text" id="description-input" />
            </label>
            <SelectCurrency />
            <SelectPayment />
            <SelectTag />
          </form>
        </main>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
