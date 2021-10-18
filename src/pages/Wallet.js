import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { user: { email }, currency } = props;
    this.state = {
      email,
      total: 0,
      currency,
      form: {
        value: 0,
        description: '',
        currency: '',
        currencies: [],
        pay: '',
        category: '',
        categories: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
        payment: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.stateUpdate = this.stateUpdate.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  componentDidUpdate(previusProps) {
    const { currencies } = this.props;
    if (previusProps.currencies.length !== currencies.length) {
      this.stateUpdate('currencies', currencies);
    }
  }

  stateUpdate(key, value) {
    const { form } = this.state;
    this.setState({
      form: { ...form, [key]: value },
    });
  }

  handleChange({ target: { name, value } }) {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    });
  }

  render() {
    const { email, total, currency, form } = this.state;
    return (
      <div>
        <Header data={ { email, total, currency } } />
        <div>
          <Form { ...form } callback={ this.handleChange } />
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  currency: state.wallet.currency,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
