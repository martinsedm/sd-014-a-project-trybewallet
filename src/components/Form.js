import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoinAPI, fetchExpense } from '../actions';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  inputButton() {
    const { addExpense } = this.props;
    return (
      <button
        type="button"
        onClick={ () => {
          addExpense(this.state);
        } }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { coinOption } = this.props;
    const optionsCard = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const optionTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          name="value"
          value={ value }
          onChange={ this.handleChange }
          type="number"
          label="Valor"
        />
        <Input
          name="description"
          value={ description }
          onChange={ this.handleChange }
          type="text"
          label="Descrição"
        />
        <Select
          name="currency"
          option={ coinOption }
          onChange={ this.handleChange }
          value={ currency }
          label="Moeda"
        />
        <Select
          name="method"
          option={ optionsCard }
          onChange={ this.handleChange }
          value={ method }
          label="Método de pagamento"
        />
        <Select
          name="tag"
          option={ optionTag }
          onChange={ this.handleChange }
          value={ tag }
          label="Tag"
        />
        { this.inputButton() }
      </form>
    );
  }
}

Form.propTypes = {
  addExpense: PropTypes.func.isRequired,
  coinOption: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCoin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(fetchExpense(state)),
  fetchCoin: () => dispatch(fetchCoinAPI()),
});

const mapStateToProps = (state) => ({
  coinOption: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
