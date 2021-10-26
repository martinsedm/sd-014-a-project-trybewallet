import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormButton from './FormButton';
import { removeExpenseAction, updateTotalValueAction } from '../actions';

class WalletTable extends React.Component {
  constructor(props) {
    super(props);

    this.fillTable = this.fillTable.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id) {
    const { removeExpense, updateTotalValue } = this.props;
    removeExpense(id);
    updateTotalValue();
  }

  fillTable() {
    const { expenses, enableEditForm } = this.props;
    return expenses.map((exp) => (
      <tr key={ exp.id }>
        <td>{ exp.description }</td>
        <td>{ exp.tag }</td>
        <td>{ exp.method }</td>
        <td>{ exp.value }</td>
        <td>{ exp.exchangeRates[exp.currency].name }</td>
        <td>{ parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2) }</td>
        <td>{ (exp.value * exp.exchangeRates[exp.currency].ask).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <FormButton
            onClick={ enableEditForm }
            label="Edit"
            testid="edit-btn"
            id={ Number(exp.id) }
          />
        </td>
        <td>
          <FormButton
            onClick={ () => this.handleRemove(exp.id) }
            label="X"
            testid="delete-btn"
            id={ Number(exp.id) }
          />
        </td>
      </tr>
    ));
  }

  render() {
    const { expenses } = this.props;
    return (
      <section>
        <table>
          <thead>
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
          </thead>
          <tbody>
            { expenses.length > 0 && this.fillTable() }
          </tbody>
        </table>
      </section>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
  updateTotalValue: PropTypes.func.isRequired,
  enableEditForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
  updateTotalValue: () => dispatch(updateTotalValueAction()),
});

export default connect(null, mapDispatchToProps)(WalletTable);
