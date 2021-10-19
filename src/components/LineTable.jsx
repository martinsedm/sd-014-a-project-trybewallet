import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export default class LineTable extends Component {
  exchangeValue(value, ask) {
    return Number(value) * Number(ask);
  }

  formatValur(ask) {
    const askNumber = Number(ask);
    return askNumber.toFixed(2);
  }

  render() {
    const { expense:
      { description, tag, method, value, exchangeRates, currency },
    } = this.props;
    const exchangeUsed = exchangeRates[currency];
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchangeUsed.name}</td>
        <td>{this.formatValur(exchangeUsed.ask)}</td>
        <td>{this.exchangeValue(value, exchangeUsed.ask)}</td>
        <td>Real</td>
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
    value: PropTypes.string,
    exchangeRates: PropTypes.shape({
      ask: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};
