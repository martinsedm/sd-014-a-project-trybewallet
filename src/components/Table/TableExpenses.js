import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BtnRemove from './BtnRemove';

class TableExpenses extends React.Component {
  render() {
    const { expenses } = this.props;

    return (
      expenses ? expenses
        .map(({ id, value, description, currency, method, tag, exchangeRates }) => (
          <tr key={ id }>
            <td>{value}</td>
            <td>{description}</td>
            <td>{currency}</td>
            <td>{method}</td>
            <td>{tag}</td>
            <td>{exchangeRates[currency].name.split('/')[0]}</td>
            <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
            <td>{parseFloat(exchangeRates[currency].ask * value).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <BtnRemove idBtn={ id } />
            </td>
          </tr>
        ))
        : <h1>Erro</h1>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpenses);
