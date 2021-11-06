import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addExpenses,
  getCoinsOfApi as getCoinsOfApiAction,
} from '../actions';
import Options from './Options';
import Table from './Table';
import PaymentOptions from './PaymentOptions';
import TagOptions from './TagOptions';

class Forms extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
      // expenses: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.submitExpense = this.submitExpense.bind(this);
  }

  componentDidMount() {
    const { getCoinsOfApi } = this.props;
    getCoinsOfApi();
  }

  formHandler({ target: { name, value } }) {
    const { expenses } = this.state;
    this.setState({ expenses: { ...expenses, [name]: value } });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  increaseId() {
    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
  }

  async submitExpense(event) {
    const { addDisp } = this.props;
    event.preventDefault();
    try {
      const url = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ exchangeRates: json }, () => addDisp(this.state));
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const values = {
      value,
      description,
    };
    return (
      <form>
        <fieldset>
          <Table handleChange={ this.handleChange } value={ values } />
          <Options
            currencies={ currencies }
            handleChange={ this.handleChange }
            value={ currency }
          />
          <PaymentOptions handleChange={ this.handleChange } value={ method } />
          <TagOptions handleChange={ this.handleChange } value={ tag } />
          <button
            type="submit"
            // onClick={ (e) => {
            //   const { id, value, description, currency, method, tag, exchangeRates } = this.state;
            //   const newXpense = { id, value, description, method, tag, exchangeRates };
            //   e.preventDefault();
            //   changeWallet({ ...this.state, exchangeRates: currencies });
            //   // console.log(this.state.currency)
            //   this.increaseId();
            //   // this.setState({ expenses });
            //   // console.log(expenses);
            // } }
            onClick={ this.submitExpense }
          >
            Adicionar Despesa
          </button>
        </fieldset>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCoinsOfApi: () => dispatch(getCoinsOfApiAction()),
  addDisp: (expenses) => (
    dispatch(addExpenses(expenses))),
});

Forms.propTypes = {
  getCoinsOfApi: PropTypes.func,
  addDisp: PropTypes.func,
  currencies: PropTypes.object,
  expenses: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
