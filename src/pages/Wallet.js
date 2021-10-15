import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseApi: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const requestApi = await fetch(url);
    const response = await requestApi.json();
    const cent = Object.values(response).splice(1);
    this.setState({
      responseApi: cent,
    });
  }

  render() {
    const { responseApi } = this.state;
    console.log(responseApi);
    return (
      <>
        <Header />
        <form>
          <label htmlFor="value-debt">
            Valor
            <input type="text" name="valor" id="value-debt" />
          </label>
          <label htmlFor="value-desc">
            Descrição
            <input type="text" name="valor" id="value-desc" />
          </label>
          <label htmlFor="value-moeda">
            Moeda
            <select id="value-moeda">
              { responseApi.map((value) => (
                <option key={ value.code }>
                  { value.code }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="value-metodo">
            Método de pagamento
            <select id="value-metodo">
              <option> Dinheiro </option>
              <option> Cartão de crédito </option>
              <option> Cartão de débito </option>
            </select>
          </label>
          <label htmlFor="value-type">
            Tag
            <select id="value-type">
              <option> Alimentação </option>
              <option> Lazer </option>
              <option> Trabalho </option>
              <option> Transporte </option>
              <option> Saúde </option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default Wallet;
