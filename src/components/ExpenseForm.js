import React from 'react';
import { connect } from 'react-redux';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.mapcoins = this.mapcoins.bind(this);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="number" name="expense" id="expense" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="coins">
          Moeda:
          <select name="coins" id="coins">
            Coins
            {currencies.map((coin) => (coin !== 'USDT' ? <option>{coin}</option> : null))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select name="payment" id="payment">
            Payment:
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenseTag">
          Tag:
          <select name="expenseTag" id="expenseTag">
            Tag:
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currencies: state.wallet.currencies,
  }
);

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(ExpenseForm);
