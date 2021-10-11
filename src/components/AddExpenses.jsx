import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { YWRkRXhwZW5zZQ, Z2V0Q3VycmVuY3lUaHVuaw, Y2hhbmdlRWRpdFN0YXRl,
  c2V0RWRpdGVkRXhwZW5zZQ } from '../actions/index';

import InputGen from './InputGen';
import Currency from './Currency';
import PaymentForm from './PaymentForm';
import Tag from './Tag';

class AddExpenses extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      value: 0,
      description: '',
      tag: 'Lazer',
      currency: 'USD',
      method: 'Cartão de Crédito',
      exchangeRates: null,
    };
    this.c2V0RXhwZW5zZVRvRWRpdA = this.c2V0RXhwZW5zZVRvRWRpdA.bind(this);
    this.aGFuZGxlQ2hhbmdl = this.aGFuZGxlQ2hhbmdl.bind(this);
    this.b25DbGlja0J0bg = this.b25DbGlja0J0bg.bind(this);
  }

  componentDidUpdate() {
    const { editor, idToEdit } = this.props;
    if (editor) {
      this.c2V0RXhwZW5zZVRvRWRpdA(idToEdit);
    }
  }

  async b25DbGlja0J0bg() {
    const { expenses, Z2V0Q3VycmVuY2llcw, c2VuZEV4cGVuc2U, isFetching,
      c2V0RWRpdFN0YXRl, c2V0RWR0RXhwZW5zZQ, toExchangeRates } = this.props;
    if (isFetching) {
      const { id, value, description, tag, currency, method, exchangeRates } = this.state;
      const edtExpense = { id, value, description, tag, currency, method, exchangeRates };
      c2V0RWR0RXhwZW5zZQ(edtExpense);
      return c2V0RWRpdFN0YXRl({
        load: false,
        newSet: false,
        expense: null,
      });
    }
    await Z2V0Q3VycmVuY2llcw();
    const { id, value, description, tag, currency, method, exchangeRates } = this.state;
    const expense = { id, value, description, tag, currency, method, exchangeRates };
    expense.id = expenses.length;
    expense.exchangeRates = toExchangeRates;
    await c2VuZEV4cGVuc2U(expense);
  }

  async c2V0RXhwZW5zZVRvRWRpdA(idToEdit) {
    const { expenses, c2V0RWRpdFN0YXRl } = this.props;
    const toEdit = expenses.find((exp) => exp.id === idToEdit);
    const { id, value, description, tag, currency, method, exchangeRates } = toEdit;
    this.setState({ id, value, description, tag, currency, method, exchangeRates });
    await c2V0RWRpdFN0YXRl({
      load: false,
      newSet: true,
      expense: id,
    });
  }

  aGFuZGxlQ2hhbmdl({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description,
      tag, currency, method } = this.state;
    const { isFetching } = this.props;
    return (
      <section className="expense-container">
        <form className="expense">
          <InputGen
            config={ ['number', 'value', 'value-Input', value,
              false, this.aGFuZGxlQ2hhbmdl, 'Valor', 'input-wallet'] }
          />
          <InputGen
            config={ ['text', 'description', 'description-Input', description,
              false, this.aGFuZGxlQ2hhbmdl, 'Descrição', 'input-wallet'] }
          />
          <Currency
            name="currency"
            value={ currency }
            onChange={ this.aGFuZGxlQ2hhbmdl }
          />
          <PaymentForm
            name="method"
            value={ method }
            onChange={ this.aGFuZGxlQ2hhbmdl }
          />
          <Tag name="tag" value={ tag } onChange={ this.aGFuZGxlQ2hhbmdl } />
          <button onClick={ this.b25DbGlja0J0bg } type="button">
            {isFetching ? 'Editar despesa' : 'Adicionar despesa'}
          </button>
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
    toExchangeRates: state.wallet.toExchangeRates,
    editor: state.wallet.editor,
    idToEdit: state.wallet.idToEdit,
    isFetching: state.wallet.isFetching,
  };
}

const mapDispatchToProps = (dispatch) => ({
  c2VuZEV4cGVuc2U: (payload) => dispatch(YWRkRXhwZW5zZQ(payload)),
  c2V0RWR0RXhwZW5zZQ: (payload) => dispatch(c2V0RWRpdGVkRXhwZW5zZQ(payload)),
  Z2V0Q3VycmVuY2llcw: () => dispatch(Z2V0Q3VycmVuY3lUaHVuaw()),
  c2V0RWRpdFN0YXRl: (payload) => dispatch(Y2hhbmdlRWRpdFN0YXRl(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);

AddExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  editor: PropTypes.bool,
  isFetching: PropTypes.bool,
  idToEdit: PropTypes.number,
  Z2V0Q3VycmVuY2llcw: PropTypes.func.isRequired,
  c2V0RWRpdFN0YXRl: PropTypes.func.isRequired,
  c2V0RWR0RXhwZW5zZQ: PropTypes.func.isRequired,
  toExchangeRates: PropTypes.objectOf(PropTypes.any),
  c2VuZEV4cGVuc2U: PropTypes.func.isRequired,
};

AddExpenses.defaultProps = {
  toExchangeRates: {},
  editor: false,
  isFetching: false,
  idToEdit: 0,
};
