import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExpensesForm from '../components/ExpensesForm';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { fetchCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;

    fetchCurrencies();
  }

  render() {
    const { loading } = this.props;

    return (
      <>
        <Header />
        { loading ? <Loading /> : <ExpensesForm /> }
      </>
    );
  }
}

Wallet.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    loading: state.wallet.loading,
  });

const mapDispatchToProps = (dispatch) => (
  {
    fetchCurrencies: () => dispatch(fetchCurrenciesThunk()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
