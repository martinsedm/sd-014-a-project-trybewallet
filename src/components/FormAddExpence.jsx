import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import fetchCurrencyApi from '../services/currencyAPI';
import { setExpenses } from '../actions/index';
import Input from './Input';
import Select from './Select';
import Button from './Button';

class FormAddExpence extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      payMethod: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      expenses: [],
    };

    // this.sumExpense = this.sumExpense.bind(this);
    // this.fetchCurrencyApi = this.fetchCurrencyApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    // this.fetchCurrencyApi().then((response) => console.log(response));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  // fetchCurrencyApi() {
  //   fetch('https://economia.awesomeapi.com.br/json/all').then((response) => {
  //     response.json()
  //       // .then((responseJson) => this.setState({ json: responseJson }));
  //       .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)));
  //   });
  // }

  // sumExpense(currency, value) {
  //   const { json } = this.state;
  //   const usedCurrency = currency.value;
  //   console.log(usedCurrency);
  //   const atualCurrencyValue = json.USD.ask;
  //   console.log(atualCurrencyValue);
  //   console.log(value);

  async handleClick() {
    const { id, value, currency, payMethod, tag, description, expenses } = this.state;
    const { dispatchSetValue, sum } = this.props;
    const result = await fetch('https://economia.awesomeapi.com.br/json/all');
    const jsonX = await result.json();
    // this.fetchCurrencyApi();
    this.setState({
      id: id + 1,
      expenses: [...expenses, {
        value,
        currency,
        payMethod,
        tag,
        description,
        id,
        atualCurrency: jsonX,
      }],
    });
    dispatchSetValue(this.state);
    sum();
  }

  render() {
    const { value, currency, payMethod, tag, description } = this.state;
    const { currencies } = this.props;
    const payMethodOpt = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOpt = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          type="number"
          name="value"
          label="Valor"
          value={ value }
          onChange={ this.handleChange }
        />
        <Select
          name="currency"
          label="Moeda"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          name="payMethod"
          label="Método de pagamento"
          value={ payMethod }
          options={ payMethodOpt }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          label="Tag"
          value={ tag }
          options={ tagOpt }
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          name="description"
          label="Descrição"
          value={ description }
          onChange={ this.handleChange }
        />
        <Button name="button" label="Adicionar despesa" onClick={ this.handleClick } />
      </form>
    );
  }
}

FormAddExpence.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
  sum: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (state) => dispatch(setExpenses(state.expenses)),
});

export default connect(null, mapDispatchToProps)(FormAddExpence);
