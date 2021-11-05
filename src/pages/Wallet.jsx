import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { addCurrencies } from '../actions';
import ExpenseForm from './ExpenseForm';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: [],
    };
  }

  async componentDidMount() {
    await this.fetchCurrency().then((response) => {
      this.setState({
        currency: this.removeCurrency(response),
      });
    });
    const { saveCurrencies } = this.props;
    const { currency } = this.state;
    saveCurrencies(currency);
  }

  removeCurrency(currency) {
    const newCurrency = Object.keys(currency).filter((element) => element !== 'USDT');
    return newCurrency;
  }

  async fetchCurrency() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    // console.log(data);
    return data;
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        <p />
      </div>
    );
  }
}

Wallet.propTypes = {
  saveCurrencies: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    saveCurrencies: (data) => dispatch(addCurrencies(data)),
  };
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
