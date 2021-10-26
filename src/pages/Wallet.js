import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };

    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const currencyApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyJson = await currencyApi.json();
    const keysCurrency = Object.keys(currencyJson);
    const removeUSDT = keysCurrency.filter((currency) => currency !== 'USDT');
    this.setState({
      currencies: removeUSDT,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <div className="wallet-container">
        <Header />
        <form>
          <label htmlFor="wallet-value">
            Valor
            <input type="text" id="wallet-value" />
          </label>
          <label htmlFor="wallet-description">
            Descrição
            <input type="text" id="wallet-description" />
          </label>
          <label htmlFor="wallet-currency">
            Moeda
            <select type="text" id="wallet-currency">
              { currencies.map((currency, index) => (
                <option key={ index } value={ currency }>
                  { currency }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="wallet-payment">
            Método de pagamento
            <select type="text" id="wallet-payment">
              <option value="wallet-payment-money">Dinheiro</option>
              <option value="wallet-payment-credit">Cartão de crédito</option>
              <option value="wallet-payment-debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="wallet-tag">
            Tag
            <select type="text" id="wallet-tag">
              <option value="wallet-tag-food">Alimentação</option>
              <option value="wallet-tag-fun">Lazer</option>
              <option value="wallet-tag-work">Trabalho</option>
              <option value="wallet-tag-transport">Transporte</option>
              <option value="wallet-tag-health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
