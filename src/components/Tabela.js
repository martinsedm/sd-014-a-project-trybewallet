import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tabela extends Component {
  render() {
    const headerTable = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              { headerTable.map((item, idx) => (
                <th key={ idx }>{item}</th>
              ))}
            </tr>
            { expenses.map((item) => (
              <tr key={ item.id }>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{(item.value)}</td>
                <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
                <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>{(item.exchangeRates[item.currency].ask * item.value).toFixed(2)}</td>
                <td>Editar/Remover</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Tabela.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Tabela);
