import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpenses } from '../actions';

class WalletTableItems extends Component {
  render() {
    const { expenses, setRemoveExpenses } = this.props;
    return (
      <tbody>
        { expenses
          .map(({ id, value, description, currency, method, tag, exchangeRates }) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/') }</td>
              <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>
                { (value * exchangeRates[currency].ask).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => setRemoveExpenses(id) }
                >
                  Deletar
                </button>
              </td>
            </tr>
          )) }
      </tbody>
    );
  }
}

WalletTableItems.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRemoveExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setRemoveExpenses: (id) => dispatch(removeExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTableItems);
