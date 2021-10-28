import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const tag = ['Alimentação', 'Transporte', 'Lazer', 'Trabalho', 'Saúde', 'Outros'];
const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: [],
    };

    this.createInput = this.createInput.bind(this);
    this.createSelect = this.createSelect.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency().then((response) => {
      this.setState({
        currency: response,
      });
    });
  }

  createInput(id, type, value) {
    return (
      <>
        <form>
          <label htmlFor={ id }>
            { value }
            <input type={ type } name={ id } id={ id } />
          </label>
        </form>
        <p />
      </>
    );
  }

  removeCurrency() {
    const { currency } = this.state;
    const newCurrency = Object.keys(currency).filter((element) => element !== 'USDT');
    this.setState({
      currency: newCurrency,
    });
    console.log(newCurrency);
  }

  createSelect(id, obj = {}, value) {
    return (
      <>
        <form>
          <label htmlFor={ id }>
            { value }
            <select name={ id } id={ id }>
              { Object.values(obj).map((element, i) => (
                <option key={ i } value={ element }>{ element }</option>
              ))}
            </select>
          </label>
        </form>
        <p />
      </>
    );
  }

  async fetchCurrency() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return data;
  }

  render() {
    const { currency } = this.state;
    const newCurrency = Object.keys(currency).filter((element) => element !== 'USDT');

    return (
      <div>
        <Header />
        <p />
        { this.createInput('value', 'text', 'Valor:') }
        { this.createInput('description', 'text', 'Descrição:') }
        { this.createSelect('currency', newCurrency, 'Moeda:') }
        { this.createSelect('payment', payment, 'Método de pagamento:') }
        { this.createSelect('tag', tag, 'Tag:') }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.user.email,
  };
}

export default connect(mapStateToProps, null)(Wallet);
