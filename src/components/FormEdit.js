import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense, initOrFinishEdit } from '../actions';
import Input from './Input';
import Select from './Select';

class FormEdit extends Component {
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
    this.catchState();
  }

  catchState() {
    const { expenses, idxEdit } = this.props;
    this.setState({
      ...expenses[idxEdit],
    });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  inputButton() {
    const { changeIdxState, idxEdit, editing, expenses, changeExpense } = this.props;
    const despesa = [...expenses];
    const newExpenses = despesa.map((item, id) => (id !== idxEdit ? item : this.state));
    return (
      <button
        type="button"
        onClick={ () => {
          changeExpense(newExpenses);
          changeIdxState(idxEdit, editing);
        } }
      >
        Editar despesa
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

FormEdit.propTypes = {
  changeExpense: PropTypes.func.isRequired,
  changeIdxState: PropTypes.func.isRequired,
  coinOption: PropTypes.arrayOf(PropTypes.any).isRequired,
  editing: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  idxEdit: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  idxEdit: state.edit.idxEdit,
  editing: state.edit.editing,
  expenses: state.wallet.expenses,
  coinOption: state.wallet.currencies,

});
const mapDispatchToProps = (dispatch) => ({
  changeIdxState: (idx, boolean) => dispatch(initOrFinishEdit(idx, boolean)),
  changeExpense: (expenses) => dispatch(editExpense(expenses)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
