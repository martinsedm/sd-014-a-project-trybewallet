import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteItem } from '../actions';

class TableForm extends Component {
  render() {
    const { setExpeses, itemSelected } = this.props;
    return (
      <table className="ctn-table">
        <thead className="table-thead">
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
        <tbody className="table-tbody">
          { setExpeses.map((item, index) => (
            <tr key={ index }>
              <td>{ item.description }</td>
              <td>{ item.tag }</td>
              <td>{ item.method }</td>
              <td>{ item.value }</td>
              {/* item abaixo, acessa obj exchange, acessa obj currency, split do name */}
              <td>{ item.exchangeRates[item.currency].name.split('/')[0] }</td>
              <td>{ parseFloat(item.exchangeRates[item.currency].ask).toFixed(2) }</td>
              <td>
                {
                  parseFloat(item.value
                  * parseFloat(item.exchangeRates[item.currency].ask)).toFixed(2)
                }
              </td>
              <td>Real</td>
              <button
                data-testid="delete-btn"
                type="button"
                className="delete-btn"
                onClick={ () => itemSelected(item) }
              >
                Deletar
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  setExpeses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  itemSelected: (item) => dispatch(deleteItem(item)),
});

TableForm.propTypes = {
  setExpeses: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemSelected: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);
