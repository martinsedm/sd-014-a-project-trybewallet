import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeDespesa, changeExpenses } from '../actions';
import Tag from '../components/Tag';
import Input from '../components/Input';
import Moeda from '../components/Moeda';
import Header from '../components/Header';
import Despesas from '../components/Despesas';
import Pagamento from '../components/Pagamento';
import pegarMoedas from '../services/awesomeapi';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.salvarMoedas = this.salvarMoedas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.adicionarDespesas = this.adicionarDespesas.bind(this);
  }

  componentDidMount() {
    this.salvarMoedas();
  }

  handleChange({ target }, callback) {
    const { name, value } = target;
    this.setState({ [name]: value }, callback);
  }

  async adicionarDespesas() {
    const { value, description, currency, method, tag } = this.state;
    const { expenses, sendExpenses, sendDespesas } = this.props;
    const mo = await pegarMoedas();
    const expense = [...expenses, {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: mo,
    }];
    this.setState({
      description: '',
      value: '',
    });
    let total = 0.00;
    expense.forEach((valor) => {
      const cambio = valor.exchangeRates[valor.currency].ask;
      const numberValue = Number(valor.value);
      total += (numberValue * cambio);
    });
    sendExpenses(expense);
    sendDespesas((total.toFixed(2)).toString());
  }

  async salvarMoedas() {
    const mo = await pegarMoedas();
    const moedas = Object.keys(mo).filter((moeda) => moeda !== 'USDT');
    this.setState({ moedas });
  }

  render() {
    const { moedas, value, description, currency, method, tag } = this.state;
    return (
      <div>
        <Header />
        <form>
          <Input
            type="text"
            name="value"
            desc="Valor: "
            change={ this.handleChange }
            value={ value }
          />
          <Input
            type="text"
            name="description"
            desc="Descrição: "
            change={ this.handleChange }
            value={ description }
          />
          <Moeda change={ this.handleChange } moedas={ moedas } value={ currency } />
          <Pagamento change={ this.handleChange } value={ method } />
          <Tag change={ this.handleChange } value={ tag } />
          <button onClick={ this.adicionarDespesas } type="button">
            Adicionar despesas
          </button>
        </form>
        <Despesas />
      </div>
    );
  }
}

Wallet.propTypes = {
  despesa: PropTypes.number,
  sendDespesas: PropTypes.func,
  sendExpenses: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  sendExpenses: (expenses) => dispatch(changeExpenses(expenses)),
  sendDespesas: (despesas) => dispatch(changeDespesa(despesas)),

});

const mapStateToProps = (state) => ({
  despesa: state.wallet.despesa,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
