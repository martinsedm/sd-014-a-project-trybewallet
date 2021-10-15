import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import { categories, payment } from '../data/index';
import { getIntCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { user: { email }, currencyToExchange } = props;
    this.state = {
      email,
      total: 0,
      currencyToExchange,
      form: {
        value: 0,
        description: '',
        currency: '',
        pay: '',
        category: '',
        currencies: [],
        categories,
        payment,
      },
    };
    this.handlechange = this.handlechange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const { getIntCurrencies } = this.props;
    getIntCurrencies();
  }

  componentDidUpdate(prevProps) {
    const { currencies } = this.props;
    if (prevProps.currencies.length !== currencies.length) {
      this.updateState('currencies', currencies);
    }
  }

  updateState(key, value) {
    const { form } = this.state;
    this.setState({
      form: { ...form, [key]: value },
    });
  }

  handlechange({ target: { name, value } }) {
    const { form } = this.state;
    console.log(name, value);
    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    });
  }

  render() {
    const { email, total, currencyToExchange, form } = this.state;
    return (
      <main>
        <Header data={ { email, total, currencyToExchange } } />
        <section>
          <Form { ...form } callback={ this.handlechange } />
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencyToExchange: PropTypes.string.isRequired,
  getIntCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  currencies: state.wallet.currencies,
  currencyToExchange: state.wallet.currencyToExchange,

});

const mapDispatchToProps = (dispatch) => ({
  getIntCurrencies: () => dispatch(getIntCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
