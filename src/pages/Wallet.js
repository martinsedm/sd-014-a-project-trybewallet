import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import { categories, inputs, methods } from '../data';
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
      currencies: null,
      loading: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }

  componentDidMount() {
    fetchCurrency(URL)
      .then((response) => {
        this.setState({
          currencies: Object.keys(response),
          loading: false,
        });
      });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderInputs() {
    const { value, description } = this.state;
    return Object.values(inputs).map(({ htmlFor, text, type }) => (
      <Input
        key={ htmlFor }
        htmlFor={ htmlFor }
        text={ text }
        value={ htmlFor === 'value' ? value : description }
        type={ type || '' }
        handleChange={ this.handleChange }
      />
    ));
  }

  render() {
    const {
      currency,
      payment,
      category,
      currencies,
      loading,
    } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <Header />
        <form
          onSubmit={ (e) => {
            e.preventDefault();
          } }
        >
          { this.renderInputs() }
          <Select
            htmlFor="currency"
            text="Moeda"
            options={ loading ? ['loading'] : currencies }
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
