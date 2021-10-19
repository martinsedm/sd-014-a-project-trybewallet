import React from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';

class TableBody extends React.Component {
  bringCurrency(exchangeRates, expense) {
    return Object.values(exchangeRates).find((rate) => (
      rate.code === expense.currency
    ));
  }

  render() {
    const { props: { expenses } } = this;
    return (
      <tbody>
        {expenses
          ? expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>
                {this.bringCurrency(expense.exchangeRates, expense).name.split('/')[0]}
              </td>
              <td>
                {Math.ceil((this
                  .bringCurrency(expense.exchangeRates, expense).ask) * 100) / 100}
              </td>
              <td>
                {Math.ceil((expense.value * this
                  .bringCurrency(expense.exchangeRates, expense).ask) * 100) / 100}
              </td>
              <td>Real</td>
              <td>teste</td>
            </tr>
          ))
          : null}
      </tbody>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

TableBody.propTypes = {
  expenses: P.arrayOf(P.any).isRequired,
};

export default connect(mapStateToProps)(TableBody);
