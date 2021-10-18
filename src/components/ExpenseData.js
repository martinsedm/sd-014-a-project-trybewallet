import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, startEdit } from '../actions';

class ExpenseData extends React.Component {
  constructor(props) {
    super(props);

    this.startEdit = this.startEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  startEdit({ target: { id } }) {
    const { setEditForm } = this.props;
    setEditForm(id);
  }

  handleClick({ target: { id } }) {
    const { setRemoval } = this.props;
    setRemoval(id);
  }

  render() {
    const { expenses } = this.props;

    if (expenses.length === 0) return null;

    return (
      expenses.map(({ id, description, tag, method, value, exchangeRates, currency }) => (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ exchangeRates[currency].name.split('/')[0] }</td>
          <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
          <td>
            { parseFloat(exchangeRates[currency].ask * value).toFixed(2) }
          </td>
          <td>Real</td>
          <td>
            <button
              type="button"
              data-testid="edit-btn"
              onClick={ this.startEdit }
              id={ id }
            >
              Editar
            </button>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ this.handleClick }
              id={ id }
            >
              X
            </button>
          </td>
        </tr>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setRemoval: (id) => dispatch(removeExpense(id)),
  setEditForm: (id) => dispatch(startEdit(id)),
});

ExpenseData.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRemoval: PropTypes.func.isRequired,
  setEditForm: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseData);
