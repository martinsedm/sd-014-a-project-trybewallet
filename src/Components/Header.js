import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      valorTotal: 0,
    };
    this.sumExpenses = this.sumExpenses.bind(this);
  }
  // previousprops nesse caso está guardando o meu estado antes de ser alterado. E então comparo com o estado atual para garantir que só chamarei a função caso tenha havido atualização

  componentDidUpdate(previousProps) {
    const { expenses } = this.props;
    if (previousProps.expenses !== expenses) {
      this.sumExpenses();
    }
  }
  // função que acessar o value do expenses e a propridade ask do exchange para a conta da conversão

  sumExpenses() {
    const { expenses } = this.props;
    const valorTotal = expenses.reduce((acc, valor) => {
      acc += valor.value * valor.exchangeRates[valor.currency].ask;
      return acc;
    }, 0);
    this.setState({
      valorTotal,
    });
  }

  render() {
    const { valorTotal } = this.state;
    const { email } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">
          { email }
        </h2>
        <p>
          Despesa total:
          <span data-testid="total-field">
            { valorTotal }
          </span>
        </p>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
      </header>
    );
  }
}
// passando estado como props para poder usar as propridades do expenses
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  expenses: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
