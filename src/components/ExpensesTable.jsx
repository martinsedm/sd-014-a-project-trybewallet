import React from 'react';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableBodyMaker = this.tableBodyMaker.bind(this);
    this.tableCustomRow = this.tableCustomRow.bind(this);
  }

  tableCustomRow(content) {
    return content;
  }

  tableBodyMaker() {

    return (
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
      </table>
    );
  }

  render() {
    return (
      <div>
        <br />
        Table
        <br />
        <this.tableBodyMaker />
      </div>
    );
  }
}

export default connect(null)(ExpensesTable);
