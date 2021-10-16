import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export default class LineTable extends Component {
  render() {
    const { expense } = this.props;
    return (
      <tr>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.currency}</td>
        <td>{expense.currency}</td>
        <td>cambio utilozadp (use js pra verificar iss)</td>
        <td>valor convertido (use js pra verificar iss)</td>
        <td>moeda de conversao (nocaso real brl)</td>
        <td>
          <Button
            text="editar"
            // função de excluir line
            testId="id para RTL"
          />
          <Button
            text="editar"
            // função de excluir line
            testId="id para RTL"
          />
        </td>
      </tr>
    );
  }
}

LineTable.propTypes = {
  expense: PropTypes.shape({
    price: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
