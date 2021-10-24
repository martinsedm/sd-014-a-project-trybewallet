import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './subComponents/Input';
import { addExpenseThunk, getCurrenciesActionThunk } from '../actions';
import SelectCurrency from './subComponents/SelectCurrency';
import SelectMethod from './subComponents/SelectMethod';
import SelectTag from './subComponents/SelectTag';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      value: 0,
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Lazer',
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCurrencySelect = this.handleCurrencySelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleCurrencySelect({ target }) {
    this.setState({
      currency: target.value,
    });
  }

  handleMethod({ target }) {
    this.setState({
      method: target.value,
    });
  }

  handleClick(event) {
    const { newExpense } = this.props;
    event.preventDefault();
    newExpense(this.state);
    let { id } = this.state;
    id += 1;
    this.setState({
      id,
    });
  }

  render() {
    const { value, description, selectedCurrency, method } = this.state;
    return (
      <form>
        <Input
          text="Valor"
          name="value"
          type="number"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          text="Descrição"
          name="description"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectCurrency
          text="Moeda"
          name="moeda"
          value={ selectedCurrency }
          onChange={ this.handleCurrencySelect }
        />
        <SelectMethod
          name="método de pagamento"
          value={ method }
          onChange={ this.handleMethod }
        />
        <SelectTag name="tag" onChange={ this.handleChange } />
        <button type="submit" onClick={ this.handleClick }>
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  newExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesActionThunk()),
  newExpense: (expense) => dispatch(addExpenseThunk(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
