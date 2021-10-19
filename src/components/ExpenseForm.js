import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { totalSave } from '../actions';
import InputDefault from './InputDefault';
import SelectDefault from './SelectDefault';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    // Referência ao código do Leonardo Diniz Bermejo - T14A
    // https://github.com/tryber/sd-014-a-project-trybewallet/blob/leonardo-bermejo-project-trybewallet/src/components/ExpensesForm.js
    const exchangeRates = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    this.setState({ exchangeRates });
    const { addExpense } = this.props;
    addExpense(this.state);
    const { id } = this.state;
    // Referência ao código de Rod Pinheiro - T14A
    // https://github.com/tryber/sd-014-a-project-trybewallet/blob/rod-pinheiro-trybewallet/src/components/WalletForm.jsx
    this.setState({ id: id + 1 });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const arrayPagamentos = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const arrayTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <InputDefault
          nameLabel="Valor:"
          type="number"
          id="value"
          onChange={ this.handleChange }
          value={ value }
        />
        <InputDefault
          nameLabel="Descrição"
          id="description"
          type="text"
          onChange={ this.handleChange }
          value={ description }
        />
        <SelectDefault
          nameLabel="Moeda"
          id="currency"
          onChange={ this.handleChange }
          value={ currency }
          array={ currencies }
        />
        <SelectDefault
          nameLabel="Método de pagamento"
          id="method"
          array={ arrayPagamentos }
          onChange={ this.handleChange }
          value={ method }
        />
        <SelectDefault
          nameLabel="Tag"
          id="tag"
          array={ arrayTags }
          onChange={ this.handleChange }
          value={ tag }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currencies: state.wallet.currencies,
  }
);

const mapDispatchToProps = (dispatch) => ({
  addExpense: (exp) => dispatch(totalSave(exp)),
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  addExpense: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
