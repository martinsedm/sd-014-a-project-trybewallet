import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setExpenses } from '../actions/index';
import Button from './Button';

class TableExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteExp: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { expenses, dispatchSetValue, sum } = this.props;
    const expenseId = event.target.name;
    // const filterExpenses = expenses.filter((exp) => exp.Id !== expenseId);
    expenses.splice(expenseId, 1);
    dispatchSetValue(expenses);

    this.setState({
      deleteExp: true,
    });
    sum();

    console.log(expenseId);
    console.log('click', expenses);
  }

  render() {
    const { expenses } = this.props;
    const { deleteExp } = this.state;
    return (
      <>
        <table>
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
          { console.log('render', expenses) }
          { expenses.map((expense) => {
            const { id, value, currency, method,
              tag, description, exchangeRates } = expense;
            const atualCurrencyValue = Number(exchangeRates[currency].ask);
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{atualCurrencyValue.toFixed(2)}</td>
                <td>{atualCurrencyValue * value}</td>
                <td>Real</td>
                <td>
                  <Button name={ id } data="delete" onClick={ this.handleClick } />
                </td>
              </tr>
            );
          })}
        </table>
        <p>{ deleteExp }</p>
      </>
    );
  }
}

TableExpense.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  sum: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (state) => dispatch(setExpenses(state)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpense);
