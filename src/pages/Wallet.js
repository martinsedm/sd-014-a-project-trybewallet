import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpenditureForm from '../components/ExpenditureForm';
import ExpenseTable from '../components/ExpenseTable';
import { fetchCoins } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenditureForm />
        <ExpenseTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  getCoins: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
