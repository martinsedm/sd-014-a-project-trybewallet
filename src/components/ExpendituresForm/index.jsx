import React from 'react';
import { connect } from 'react-redux';
import P from 'prop-types';
import { addCurrenciesThunk, addExpenditureThunk } from '../../actions';
import Input from '../Input';
import Select from '../Select';

const PAYMENT = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const CATEGORY = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const ADD_EXP = 'Adicionar despesas';

class ExpendituresForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies, addExpense } = this.props;
    return (
      <form>
        <Input
          type="number"
          onChange={ this.handleChange }
          value={ value }
          name="value"
          testId="value-input"
          label="Valor"
        />
        <Select
          label="Moeda"
          options={ currencies }
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
          id="currency-input"
        />
        <Select
          label="Método de pagamento"
          options={ PAYMENT }
          name="method"
          value={ method }
          onChange={ this.handleChange }
          id="payment-input"
        />
        <Select
          label="Tag"
          options={ CATEGORY }
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
          id="category-input"
        />
        <Input
          type="text"
          onChange={ this.handleChange }
          value={ description }
          name="description"
          testId="description-input"
          label="Descrição"
        />
        <button type="button" onClick={ () => addExpense(this.state) }>{ADD_EXP}</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(addCurrenciesThunk()),
  addExpense: (details) => dispatch(addExpenditureThunk(details)),
});

ExpendituresForm.propTypes = {
  getCurrencies: P.func.isRequired,
  currencies: P.arrayOf(P.string).isRequired,
  addExpense: P.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpendituresForm);
