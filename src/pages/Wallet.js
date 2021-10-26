import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchApi from '../actions';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  componentDidMount() {
    const { setFetchApi } = this.props;
    setFetchApi();
  }

  totalExpenses() {
    const { total } = this.state;
    const { expenses } = this.props;
    let totalValue = 0;
    if (expenses.length !== 0) {
      const expense = expenses.find((exp) => exp.id === expenses.length - 1);
      const expenseCurrency = expense.currency;
      const currencyAskPrice = expense.exchangeRates[expenseCurrency].ask;
      totalValue += parseFloat(expense.value) * currencyAskPrice;
      console.log('id', totalValue);
      this.setState({
        total: total + totalValue,
      });
    }
  }

  render() {
    const { total } = this.state;
    const { userLogged } = this.props;

    return (
      <div>
        <header>
          <span data-testid="email-field">{ userLogged }</span>
          { ' ' }
          <span data-testid="total-field">{ total.toFixed(2) }</span>
          { ' ' }
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <Forms totalExpenses={ this.totalExpenses } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogged: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchApi: () => dispatch(fetchApi()),
});
Wallet.propTypes = ({
  userLogged: PropTypes.string.isRequired,
  setFetchApi: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
