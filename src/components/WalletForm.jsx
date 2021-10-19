import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, addExpenses } from '../actions';
import { getCurrencies } from '../services';
import ValueInput from './ValueInput';
import DescriptionInput from './DescriptionInput';
import CurrencySelect from './CurrencySelect';
import MethodSelect from './MethodSelect';
import TagSelect from './TagSelect';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { setExpenses } = this.props;
    const exchangeRates = await getCurrencies();
    this.setState({ exchangeRates });
    setExpenses(this.state);
  }

  render() {
    const { value, description } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <ValueInput onChange={ this.handleChange } value={ value } />
        <DescriptionInput onChange={ this.handleChange } value={ description } />
        <CurrencySelect onChange={ this.handleChange } />
        <MethodSelect onChange={ this.handleChange } />
        <TagSelect onChange={ this.handleChange } />
        <button type="submit">Adicionar despesas</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchAPI()),
  setExpenses: (expense) => dispatch(addExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
