import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { saveToLocalStorage } from '../services';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <table>
          <TableHead />
          <TableBody { ...this.props } />
        </table>
        <button
          type="button"
          onClick={ () => saveToLocalStorage(email, expenses) }
        >
          Salvar Lista
        </button>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  email: PropTypes.string.isRequired,
  disableBtn: PropTypes.bool.isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default Table;
