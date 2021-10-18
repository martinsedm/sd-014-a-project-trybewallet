import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class TableForm extends Component {
  render() {
    const { setExpeses } = this.props;
    return (
      <table className="ctn-table">
        <thead className="table-thead">
          <tr>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de Pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio Utilizado</td>
            <td>Valor Convertido</td>
            <td>Moeda de Conversão</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  setExpeses: state.wallet.expenses,
});

TableForm.propTypes = {
  setExpeses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TableForm);
