import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeConta } from '../actions';

class Table extends React.Component {
  removerLinha() {
    // const { deletador } = this.props;
    // deletador(linha);
  }

  render() {
    const { carteira } = this.props;
    return (
      <table>
        {console.log(carteira)}
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
        {carteira.map((cur, index) => ( // cur = current
          <tr key={ index }>
            <td>{ cur.description }</td>
            <td>{ cur.tag }</td>
            <td>{ cur.method }</td>
            <td>{ parseFloat(cur.value) }</td>
            <td>{ cur.exchangeRates[cur.currency].name}</td>
            <td>{ parseFloat(cur.exchangeRates[cur.currency].ask).toFixed(2)}</td>
            <td>
              { parseFloat(cur.exchangeRates[cur.currency].ask * cur.value).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button type="button" onClick={ this.removerLinha(cur) }>
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  carteira: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  deletador: (conta) => dispatch(removeConta(conta)),
});
Table.propTypes = {
  carteira: PropTypes.arrayOf.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
