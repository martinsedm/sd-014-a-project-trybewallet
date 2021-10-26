import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { setExpenses } from '../actions';
import getCurrenciesFromApi from '../services/currenciesAPI';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { value, description, currency, method, tag } = this.state;
    const { addExpenses } = this.props;
    const currencies = await getCurrenciesFromApi();
    const expenses = {
      value, description, currency, method, tag, exchangeRates: currencies,
    };
    addExpenses(expenses);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <FormInput
          name="value"
          value={ value }
          onChange={ this.handleChange }
          label="Valor"
          type="number"
        />
        <FormInput
          name="description"
          value={ description }
          onChange={ this.handleChange }
          label="Descrição"
          type="text"
        />
        <FormSelect
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
          items={ currencies }
          label="moeda"
        />
        <FormSelect
          name="method"
          value={ method }
          onChange={ this.handleChange }
          items={ paymentMethod }
          label="Método de pagamento"
        />
        <FormSelect
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
          items={ categories }
          label="Tag"
        />
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expenses) => dispatch(setExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
