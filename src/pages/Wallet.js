import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, getCurrencyThunk } from '../actions/index';
import InputGen from '../components/InputGen';
import Tag from '../components/Tag';
import PaymentForm from '../components/PaymentForm';
import Currency from '../components/Currency';
import '../css/Wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseValue: 0,
      expenseDesc: '',
      expenseTag: 'Lazer',
      expenseCurrency: 'USD',
      expensePaymentForm: 'Cartão de Crédito',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  async onClickBtn() {
    const { expenses, currencies, getCurrencies, sendExpense } = this.props;
    const { expenseValue, expenseCurrency, expenseDesc,
      expensePaymentForm, expenseTag } = this.state;
    await getCurrencies();
    const expense = {
      id: expenses.length,
      value: expenseValue,
      description: expenseDesc,
      currency: expenseCurrency,
      method: expensePaymentForm,
      tag: expenseTag,
      exchangeRates: Object.fromEntries(currencies),
    };
    sendExpense(expense);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { expenseValue, expenseDesc,
      expenseTag, expenseCurrency, expensePaymentForm } = this.state;
    const { email, total } = this.props;
    return (
      <>
        <header className="header">
          <p data-testid="email-field">{email || 'Nenhum email'}</p>
          <p data-testid="total-field">{total || 0}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <section>
          <form>
            <InputGen
              config={ ['number', 'expenseValue', 'expenseValue-Input', expenseValue,
                false, this.handleChange, 'Valor', 'expenseValue'] }
            />
            <InputGen
              config={ ['text', 'expenseDesc', 'expenseDesc-Input', expenseDesc,
                false, this.handleChange, 'Descrição', 'expenseDesc'] }
            />
            <Currency
              name="expenseCurrency"
              value={ expenseCurrency }
              onChange={ this.handleChange }
            />
            <PaymentForm
              name="expensePaymentForm"
              value={ expensePaymentForm }
              onChange={ this.handleChange }
            />
            <Tag
              name="expenseTag"
              value={ expenseTag }
              onChange={ this.handleChange }
            />
            <button onClick={ this.onClickBtn } type="button">Adicionar despesa</button>
          </form>
        </section>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    total: state.wallet.total,
    expenses: state.wallet.expenses,
    currencies: state.wallet.currencies,
  };
}

const mapDispatchToProps = (dispatch) => ({
  sendExpense: (payload) => dispatch(addExpense(payload)),
  getCurrencies: () => dispatch(getCurrencyThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  sendExpense: PropTypes.func.isRequired,
};
