import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    const { disableSave, saveTable } = this.props;
    return (
      <div>
        <table>
          <TableHead />
          <TableBody { ...this.props } />
        </table>
        <button
          type="button"
          onClick={ saveTable }
          disabled={ disableSave }
        >
          Salvar Lista
        </button>
      </div>
    );
  }
}

Table.propTypes = {
  disableSave: PropTypes.bool.isRequired,
  saveTable: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  disableBtn: PropTypes.bool.isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default Table;
