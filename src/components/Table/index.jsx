import React from 'react';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

class Table extends React.Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
