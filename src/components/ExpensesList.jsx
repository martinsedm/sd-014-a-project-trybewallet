import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Expense from './Expense';

class ExpensesList extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <>
        <div className="container-fluid expenses-header">
          <div className="row">
            <div className="col" role="columnheader">Descrição</div>
            <div className="col" role="columnheader">Tag</div>
            <div className="col" role="columnheader">Método de pagamento</div>
            <div className="col" role="columnheader">Valor</div>
            <div className="col" role="columnheader">Moeda</div>
            <div className="col" role="columnheader">Câmbio utilizado</div>
            <div className="col" role="columnheader">Valor convertido</div>
            <div className="col" role="columnheader">Moeda de conversão</div>
            <div className="col" role="columnheader">Editar/Excluir</div>
          </div>
        </div>
        <div className="container-fluid expense-items">
          { expenses.map((expense) => <Expense expense={ expense } key={ expense.id } />)}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(ExpensesList);
