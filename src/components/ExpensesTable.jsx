import React, { Component } from 'react';
import ExpenseTableHead from './ExpenseTableHead';
import ExpenseTableBody from './ExpenseTableBody';

export default class ExpensesTable extends Component {
  render() {
    return (
      <table>
        <ExpenseTableHead />
        <ExpenseTableBody />
      </table>
    );
  }
}
