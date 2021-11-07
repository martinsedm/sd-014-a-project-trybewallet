import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Uso das tags de tabela - https://www.homehost.com.br/blog/criar-sites/tabela-html/

class Table extends React.Component {
  render() {
    const tableInfos = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              { tableInfos.map((info, index) => (
                <th key={ index }>{info}</th>
              ))}
            </tr>
            { expenses.map(
              ({ id, value, description, currency, method, tag, exchangeRates }) => (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                  <td>{ (Number(exchangeRates[currency].ask)).toFixed(2) }</td>
                  <td>
                    { (Number(value) * Number(exchangeRates[currency].ask)).toFixed(2) }
                  </td>
                  <td>Real</td>
                  <td>Editar/Excluir</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
