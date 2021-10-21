import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AddTabelaGastos extends React.Component {
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
          { expenses.map((i) => (
            <tbody key={ i.id }>
              <tr>
                <td>{i.description}</td>
                <td>{i.tag}</td>
                <td>{i.value}</td>
                <td>{i.method}</td>
                <td>{i.currency}</td>
                <th>{i.tag}</th>
                <th>{i.tag}</th>
                <th>{i.tag}</th>
                <th>
                  <button type="button" data-testid="delete-btn">Editar/Excluir</button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

AddTabelaGastos.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps)(AddTabelaGastos);
