import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.getInfoCoinAPI();
  }

  async getInfoCoinAPI() {
    const coinAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await coinAPI.json();
    const coins = Object.keys(response).filter((element) => element !== 'USDT');
    this.setState({ coins });
  }

  renderSelectOptions(coins) {
    return coins.map((coin) => <option key={ coin } value={ coin }>{ coin }</option>);
  }

  render() {
    const { coins } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" />
        </label>

        <label htmlFor="Descrição">
          Descrição
          <input id="Descrição" />
        </label>

        <label htmlFor="Moeda">
          Moeda
          <select
            name="Moeda"
            id="Moeda"
          >
            {this.renderSelectOptions(coins)}

          </select>
        </label>

        <label htmlFor="metodo-pagamento">
          Método de pagamento
          <select id="metodo-pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="Tag">
          tag
          <select id="Tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
