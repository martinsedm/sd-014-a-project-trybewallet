import React from 'react';
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
      despesas: [],
      valor: 0,
      desc: '',
      moeda: 'USD',
      pag: 'Dinheiro',
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
    console.log(this.state);
  }

  adicionarDespesas() {
    const { valor, desc, moeda, pag, tag } = this.state;
    this.setState((anterior) => ({
      despesas: [...anterior.despesas, {
        valor,
        desc,
        moeda,
        pag,
        tag,
      }],
    }));
  }

  async salvarMoedas() {
    const mo = await pegarMoedas();
    const moedas = Object.keys(mo).filter((moeda) => moeda !== 'USDT');
    this.setState({ moedas });
  }

  render() {
    const { moedas, despesas, moeda, pag, tag, desc, valor } = this.state;
    return (
      <div>
        <Header />
        <form>
          <Input
            type="number"
            name="valor"
            desc="Valor: "
            change={ this.handleChange }
            value={ valor }
          />
          <Input
            type="text"
            name="desc"
            desc="Descrição: "
            change={ this.handleChange }
            value={ desc }
          />
          <Moeda change={ this.handleChange } moedas={ moedas } value={ moeda } />
          <Pagamento change={ this.handleChange } value={ pag } />
          <Tag change={ this.handleChange } value={ tag } />
          <button onClick={ this.adicionarDespesas } type="button">
            Adicionar despesas
          </button>
        </form>
        <Despesas despesas={ despesas } />
      </div>
    );
  }
}

export default Wallet;
