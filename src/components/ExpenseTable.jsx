import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cmVtb3ZlRXhwZW5zZQ, Y2hhbmdlRWRpdFN0YXRl } from '../actions/index';

class ExpenseTable extends Component {
  constructor() {
    super();
    this.b25DbGlja0J0bkRlbAo = this.b25DbGlja0J0bkRlbAo.bind(this);
    this.b25DbGlja0J0bkVkaXQ = this.b25DbGlja0J0bkVkaXQ.bind(this);
  }

  b25DbGlja0J0bkRlbAo({ target: { id } }) {
    const { cm12RXhwZW5zZQ, expenses } = this.props;
    cm12RXhwZW5zZQ(expenses.find((expense) => expense.id === Number(id)));
  }

  b25DbGlja0J0bkVkaXQ({ target: { id } }) {
    const { c2V0RWRpdFN0YXRl } = this.props;
    c2V0RWRpdFN0YXRl({
      load: true,
      newSet: false,
      expense: Number(id),
    });
  }

  Z2V0RXhwZW5zZXNDZWxscw() {
    const { expenses } = this.props;
    return (
      expenses.map(({ id, value, description, currency, method, tag, exchangeRates }) => (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name.split('/')[0]}</td>
          <td>{(parseFloat(exchangeRates[currency].ask)).toFixed(2)}</td>
          <td>
            {Math.round((value * exchangeRates[currency].ask) * 100) / 100}
          </td>
          <td>Real</td>
          <td>
            <button
              type="button"
              id={ id }
              onClick={ this.b25DbGlja0J0bkVkaXQ }
              data-testid="edit-btn"
            >
              Editar
            </button>
            <button
              type="button"
              id={ id }
              onClick={ this.b25DbGlja0J0bkRlbAo }
              data-testid="delete-btn"
            >
              Remover
            </button>
          </td>
        </tr>
      ))
    );
  }

  render() {
    return (
      <main>
        <table>
          <tbody>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            { this.Z2V0RXhwZW5zZXNDZWxscw() }
          </tbody>
        </table>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  cm12RXhwZW5zZQ: (payload) => dispatch(cmVtb3ZlRXhwZW5zZQ(payload)),
  c2V0RWRpdFN0YXRl: (payload) => dispatch(Y2hhbmdlRWRpdFN0YXRl(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  cm12RXhwZW5zZQ: PropTypes.func.isRequired,
  c2V0RWRpdFN0YXRl: PropTypes.func.isRequired,
};
