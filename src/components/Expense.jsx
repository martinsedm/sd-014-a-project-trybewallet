import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default class Expense extends Component {
  render() {
    const { expense } = this.props;
    const { description, tag, method, currency, value, exchangeRates } = expense;
    const { name, ask } = exchangeRates[currency];

    return (
      <div className="row">
        <div className="col" role="cell">{ description}</div>
        <div className="col" role="cell">{tag}</div>
        <div className="col" role="cell">{method}</div>
        <div
          className="col"
          role="cell"
        >
          {`${value}`}

        </div>
        <div className="col" role="cell">{name.split('/')[0]}</div>
        <div
          className="col"
          role="cell"
        >
          {`${parseFloat(ask).toFixed(2)}`}

        </div>
        <div
          className="col"
          role="cell"
        >
          {`${(parseFloat(value) * parseFloat(ask)).toFixed(2)}`}

        </div>
        <div className="col" role="cell">Real</div>
        <div className="col" role="cell">botão</div>
      </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
};
