import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HeaderWallet = (props) => {
  const { user, expenses } = props;
  // const moedaUSD = Object.values(response)/* .reduce((a, e) => a.concat(...Object.values(e)), []) */;
  // const cotacao = Object.values(response).find((g) => g.code === payload.code).bid;
  const totalPrice = (expenses.reduce((a, e) => a + (e
    .value * (Object.values(e.exchangeRates).find((g) => g.code === e
    .currency).ask)), 0));
  // (Object.values(e.exchangeRates).find((g) => g.code === e.currency).bid)
  return (
    <header>
      <p>
        Email:
        {' '}
        <span data-testid="email-field">{user.email}</span>
      </p>
      <p>
        {/* { console.log(expenses.reduce((a, e) => a + (e.value * (Object.values(e.exchangeRates)
          .find((g) => g.code === e.currency).bid)), 0), 'aaaa')} */}
        Despesa Total: R$
        {' '}
        <span data-testid="total-field">
          {totalPrice}
        </span>
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </p>
    </header>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

HeaderWallet.propTypes = {
  email: PropTypes.string,
  user: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, null)(HeaderWallet);
