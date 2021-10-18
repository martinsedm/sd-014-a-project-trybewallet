import React from 'react';
import { connect } from 'react-redux';
import { changeWallet } from '../actions';
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
      expenses: [],
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.salvarMoedas = this.salvarMoedas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.adicionarDespesas = this.adicionarDespesas.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  componentDidMount() {
    this.salvarMoedas();
  }

  handleChange({ target }, callback) {
    const { name, value } = target;
    this.setState({ [name]: value }, callback);
  }

  async adicionarDespesas(callback) {
    const { value, description, currency, method, tag, expenses } = this.state;
    const mo = await pegarMoedas();
    this.setState((anterior) => ({
      expenses: [...anterior.expenses, {
        id: expenses.length,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates: mo,
      }],
    }));
    this.setState({
      description: '',
      value: '0',
    }, callback);
  }

  enviar() {
    this.adicionarDespesas(() => {
      const { expenses } = this.state;
      const { sendExpenses, despesa } = this.props;
      const total = Number(expenses[expenses.length - 1].value) + despesa;
      sendExpenses(expenses, total);
      console.log(expenses);
    });
  }

  async salvarMoedas() {
    const mo = await pegarMoedas();
    const moedas = Object.keys(mo).filter((moeda) => moeda !== 'USDT');
    this.setState({ moedas });
  }

  render() {
    const { moedas, expenses, value, description, currency, method, tag } = this.state;
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
          <button onClick={ this.enviar } type="button">
            Adicionar despesas
          </button>
        </form>
        <Despesas despesas={ expenses } />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendExpenses: (expenses, despesa) => dispatch(changeWallet(despesa, null, expenses)),
});

const mapStateToProps = (state) => ({despesa: state.wallet.despesa});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
