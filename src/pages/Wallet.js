import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAPI } from '../actions';
import Expenses from '../components/Expenses';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencyAPI } = this.props;
    currencyAPI();
  }

  render() {
    const { expenses } = this.props;
    return (
      <>
        <Header />
        <Expenses />
        { expenses.length > 0 && <ExpensesTable /> }
      </>
    );
  }
}

Wallet.propTypes = {
  currencyAPI: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({ expenses });

const mapDispatchToProps = (dispatch) => ({
  currencyAPI: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
