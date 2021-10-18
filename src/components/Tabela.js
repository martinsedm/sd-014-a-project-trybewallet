import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

class Tabela extends Component {
  render() {
    const headerTable = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              { headerTable.map((item, idx) => (
                <th key={ idx }>{item}</th>
              ))}
            </tr>
            { expenses.map((item, idx) => (
              <tr key={ item.id }>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{(item.value)}</td>
                <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
                <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>{(item.exchangeRates[item.currency].ask * item.value).toFixed(2)}</td>
                <td>
                  <DeleteButton idx={ idx } />
                  {' '}
                  <EditButton idx={ idx } />
                </td>
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
