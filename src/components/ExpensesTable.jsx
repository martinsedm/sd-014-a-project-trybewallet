import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LineTable from './LineTable';

class ExpenseTable extends Component {
  render() {
    const headerTableTexts = ['Descrição',
      'Tag',
      'Método de pagamento',
      'Valor', 'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    const { getExpenses } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            {headerTableTexts.map((item) => <th key={ item }>{item}</th>)}
          </tr>
          {getExpenses.map((expense) => (
            <LineTable expense={ expense } key={ expense.id } />))}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExpenseTable;
