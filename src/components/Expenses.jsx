import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getExpenses as getExpensesAction } from '../actions';
import AddButton from './AddButton';
import Input from './Input';
import Select from './Select';

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, payment, tag } = this.state;
    const { currencies, getExpenses } = this.props;
    return (
      <form>
        <Input
          label="Valor"
          type="text"
          name="value"
          htmlFor="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          type="text"
          name="description"
          htmlFor="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          label="Moeda"
          name="currency"
          htmlFor="currency"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento"
          name="payment"
          htmlFor="payment"
          value={ payment }
          options={ methods }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag"
          name="tag"
          htmlFor="tag"
          value={ tag }
          options={ tags }
          onChange={ this.handleChange }
        />
        <AddButton onClick={ getExpenses } />
      </form>
    );
  }
}

Expenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (expenses) => dispatch(getExpensesAction(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
