import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const tableHeaders = ['Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir'];

class Table extends Component {
  render() {
    const { expenseInfo } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((tableHeader) => (
              <th key={ tableHeader }>{tableHeader}</th>))}
          </tr>
        </thead>
        <tbody>
          {expenseInfo.map(
            ({ id, tag, method, value, currency, description, exchangeRates }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{(exchangeRates[currency].name).split('/')[0]}</td>
                <td>{Math.ceil(exchangeRates[currency].ask * 100) / 100 }</td>
                <td>{Math.ceil(exchangeRates[currency].ask * value * 100) / 100}</td>
                <td>Real</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenseInfo: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  expenseInfo: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
