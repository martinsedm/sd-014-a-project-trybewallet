import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeDespesas } from '../../actions';

class BtnRemove extends React.Component {
  constructor() {
    super();
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(event) {
    event.preventDefault();
    const { expenses, idBtn, expenseRemove } = this.props;
    const newExpenses = expenses.filter((expense) => expense.id !== idBtn);
    expenseRemove(newExpenses);
  }

  render() {
    return (
      <div>
        <button
          data-testid="delete-btn"
          Type="button"
          onClick={ this.handleRemove }
        >
          Excluir
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenseRemove: (remove) => dispatch(removeDespesas(remove)),
});

BtnRemove.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.object).isRequired,
  idBtn: PropTypes.number.isRequired,
  expenseRemove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnRemove);
