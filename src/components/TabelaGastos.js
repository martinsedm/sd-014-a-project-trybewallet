import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';

class TabelaGastos extends React.Component {
  format(n) {
    return `${Number(n).toFixed(2)}`;
  }

  convertido(exchangeRates, currency, value) {
    return (exchangeRates[currency].ask * value);
  }

  btnDelete(index) {
    const { deleteItemNow } = this.props;
    deleteItemNow(index);
    // Recebe o index do item a ser deletado
  }

  render() {
    const { expenses } = this.props;
    return (
      <div id="calendario">
        <table border="3">
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
            { expenses.map((i) => (
              <tr key={ i.id }>
                <td>{i.description}</td>
                <td>{i.tag}</td>
                <td>{i.method}</td>
                <td>{i.value}</td>
                <td>{i.currency}</td>
                <td>{ i.exchangeRates[i.currency].name.split('/')[0] }</td>
                <td>{ this.format(i.exchangeRates[i.currency].ask) }</td>
                <td>
                  { this.format(
                    this.convertido(i.exchangeRates, i.currency, i.value),
                  ) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => (this.btnDelete(i)) }
                  >
                    Editar/Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItemNow: (itemDelete) => dispatch(deleteItem(itemDelete)),
});

TabelaGastos.propTypes = {
  deleteItemNow: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabelaGastos);
