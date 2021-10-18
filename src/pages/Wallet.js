import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
    this.fetchMoedas = this.fetchMoedas.bind(this);
    this.salvarMoedas = this.salvarMoedas.bind(this);
  }

  componentDidMount() {
    this.salvarMoedas();
  }

  async salvarMoedas() {
    const mo = await this.fetchMoedas();
    const moedas = Object.keys(mo).filter((moeda) => moeda !== 'USDT');
    this.setState({ moedas });
  }

  async fetchMoedas() {
    return ((await fetch('https://economia.awesomeapi.com.br/json/all')).json());
  }

  render() {
    const { moedas } = this.state;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            {'Valor: '}
            <input type="number" name="valor" id="valor" />
          </label>
          <label htmlFor="desc">
            {'Descrição: '}
            <input type="text" name="desc" id="desc" />
          </label>
          <label htmlFor="moeda">
            {'Moeda: '}
            <select name="moeda" id="moeda">
              {moedas.map((moeda, index) => (
                <option key={ index }>{moeda}</option>
              ))}
            </select>
          </label>
          <label htmlFor="pag">
            {'Método de pagamento: '}
            <select name="pag" id="pag">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            {'Tag: '}
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
