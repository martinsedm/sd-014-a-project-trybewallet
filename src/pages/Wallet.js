import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import { categories, methods } from '../data';
import { fetchCurrency, URL } from '../services/awesomeAPI';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: '',
      payment: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetchCurrency(URL)
      .then((response) => console.log(response));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, payment, category } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <Header />
        <form
          onSubmit={ (e) => {
            e.preventDefault();
          } }
        >
          <Input
            htmlFor="value"
            text="Valor"
            value={ value }
            handleChange={ this.handleChange }
            type="number"
          />
          <Input
            htmlFor="description"
            text="Descrição"
            value={ description }
            handleChange={ this.handleChange }
          />
          <Select
            htmlFor="currency"
            text="Moeda"
            value={ currency }
            handleChange={ this.handleChange }
          />
          <Select
            htmlFor="payment"
            text="Método de pagamento"
            options={ methods }
            value={ payment }
            handleChange={ this.handleChange }
          />
          <Select
            htmlFor="category"
            text="Tag"
            options={ categories }
            value={ category }
            handleChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

export default Wallet;
