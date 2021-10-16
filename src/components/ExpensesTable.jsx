import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import LineTable from './LineTable';

export default class ExpenseTable extends Component {
  render() {
    const headerTableTexts = ['Descrição',
      'Tag',
      'Método de pagamento',
      'Valor', 'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão'];
    console.log(headerTableTexts);
    // const { expenses } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            {headerTableTexts.map((item) => <th key={ item }>{item}</th>)}
          </tr>
        </tbody>
        {// expenses.map((expense) => <LineTable expense={ expense } key={ expense.id } />)
        }
      </table>
    );
  }
}

// ExpenseTable.propTypes = {
//  expenses: PropTypes.arrayOf(PropTypes.shape({
//    price: PropTypes.string,
//    currency: PropTypes.string,
//    paymentForm: PropTypes.string,
//    method: PropTypes.string,
//    description: PropTypes.string,
//    id: PropTypes.number,
//  })).isRequired,
// };
