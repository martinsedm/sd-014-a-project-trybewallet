import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import requestFetch from '../services/requestAPI';
import { walletAddExpenses } from '../actions';
import Header from './Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    this.fetchCoins();
  }

  onSubmitForm() {
    const { dispatchSetValue } = this.props;

    dispatchSetValue(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchCoins() {
    const callApi = await requestFetch();
    this.setState({
      exchangeRates: callApi,

    });
  }

  render() {
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    return (
      <div>
        <Header />
        <Form
          coins={ Object.keys(exchangeRates).filter((coins) => coins !== 'USDT') }
          value={ value }
          description={ description }
          currency={ currency }
          method={ method }
          tag={ tag }
          handleChange={ this.handleChange }
        />
        <button type="button" onClick={ this.onSubmitForm }>Adicionar Despesa</button>

      </div>);
  }
}

const mapDispachToProps = (dispatch) => ({
  dispatchSetValue: (values) => dispatch(walletAddExpenses(values)),

});

Wallet.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
};

export default connect(null, mapDispachToProps)(Wallet);
