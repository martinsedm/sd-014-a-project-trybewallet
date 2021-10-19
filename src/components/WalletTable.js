import React from 'react';
import PropTypes from 'prop-types';

class WalletTable extends React.Component {
  constructor(props) {
    super(props);

    this.fillTable = this.fillTable.bind(this);
  }

  fillTable() {
    const { expenses, deleteRow } = this.props;
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
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ deleteRow }
            id={ exp.id }
          >
            X
          </button>
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
  deleteRow: PropTypes.func.isRequired,
};

export default WalletTable;
