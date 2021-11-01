import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Despesas extends React.Component {
  constructor() {
    super();
    this.calculateValue = this.calculateValue.bind(this);
    this.renderCell = this.renderCell.bind(this);
    this.fixedValues = this.fixedValues.bind(this);
  }

  calculateValue(valor, valorDeConversao) {
    return parseFloat(valor) * parseFloat(valorDeConversao);
  }

  fixedValues(returnAsk) {
    const { expenses } = this.props;
    const retorno = [];
    const exchanges = [];
    for (let i = 0; i < expenses.length; i += 1) {
      const { exchangeRates } = expenses[i];
      const valor = expenses[i].value;
      const rate = exchangeRates[expenses[i].currency].ask;
      const rateItem = <td>{ parseFloat(rate).toFixed(2) }</td>;
      exchanges.push(rateItem);
      const total = parseFloat(valor * rate).toFixed(2);
      const item = <td>{ total }</td>;
      retorno.push(item);
    }

    if (returnAsk === true) {
      return exchanges;
    }

    return retorno;
  }

  renderCell(text, value) {
    const { expenses } = this.props;
    const key = value;
    return (
      <td>
        <th>{ text }</th>
        { expenses.map((e) => <td key={ e.id }>{ e[key] }</td>) }
      </td>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr>
          { this.renderCell('Descrição', 'description') }
          { this.renderCell('Tag', 'tag') }
          { this.renderCell('Método de pagamento', 'method') }
          { this.renderCell('Valor', 'value') }
          <th>Moeda</th>
          { expenses.map(
            (e) => <td key={ e.id }>{ e.exchangeRates[e.currency].name }</td>,
          ) }
          <th>Câmbio utilizado</th>
          { this.fixedValues(true) }
          <th>Valor convertido</th>
          { this.fixedValues() }
          <th>Moeda de conversão</th>
          { expenses.map((e) => <td key={ e.id }>Real</td>)}
          <th>
            <button type="button">Editar/Excluir</button>
          </th>
        </tr>
      </table>
    );
  }
}

Despesas.propTypes = {
  expenses: PropTypes.object,
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Despesas);
