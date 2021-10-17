import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseData extends React.Component {
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
        </tr>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseData.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseData);
