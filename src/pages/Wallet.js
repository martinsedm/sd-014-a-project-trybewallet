import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies as getCurrencies } from '../actions';
import Header from '../components/Header';
import ExpenseAdd from '../components/ExpenseAdd';
import ExpenseEdit from '../components/ExpenseEdit';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { isEditing } = this.props;
    return (
      <main>
        <Header />
        { isEditing ? <ExpenseEdit /> : <ExpenseAdd />}
        <ExpenseTable />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isEditing: state.wallet.isEditing,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  isEditing: PropTypes.bool,
  fetchCurrencies: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  isEditing: false,
};