import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import { fetchMoedas } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;

    fetchCurrencies();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => (
  {
    fetchCurrencies: () => dispatch(fetchMoedas()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
