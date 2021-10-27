import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { collumns } from '../data';
import { rmvExpense as rmvExpenseAction } from '../actions';

class ExpenseTable extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  // https://www.delftstack.com/pt/howto/javascript/javascript-round-to-2-decimal-places/
  roundToTwo(num) {
    return +(`${Math.round(`${num}e+2`)}e-2`);
  }

  handleClick({ target: { id } }) {
    const { rmvExpense } = this.props;
    rmvExpense(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            { collumns.map((item) => <th key={ item }>{ item }</th>) }
          </tr>
        </thead>
        <tbody>
          { expenses
            .map(({ id, value, currency, method, tag, description, exchangeRates }) => {
              const currencyName = exchangeRates[currency].name;
              const cambio = this.roundToTwo(exchangeRates[currency].ask);
              const exchangeValue = this.roundToTwo(value * exchangeRates[currency].ask);
              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ currencyName }</td>
                  <td>{ cambio }</td>
                  <td>{ exchangeValue }</td>
                  <td>Real</td>
                  <td>
                    <button
                      id={ id }
                      type="button"
                      data-testid="delete-btn"
                      onClick={ this.handleClick }
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            }) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  rmvExpense: (expense) => dispatch(rmvExpenseAction(expense)),
});

ExpenseTable.propTypes = {
  rmvExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
