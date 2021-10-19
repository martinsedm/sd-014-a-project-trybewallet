import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchCurrencyApi,
  addExpenciesAction,
} from '../actions';
import Header from '../components/Header';
import { payments, tags } from '../services/Data';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      expenseValue: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.setItemId = this.setState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setApi } = this.props;
    setApi();
  }

  setItemId() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { addExpense, setApi } = this.props;
    setApi();
    addExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    const { expenseValue, description } = this.state;
    return (
      <>
        <Header />
        <form>
          <Input
            id="valor:"
            label="Valor"
            type="text"
            name="expenseValue"
            value={ expenseValue }
            onChange={ this.handleChange }
          />
          <Input
            id="descrição"
            label="Descrição:"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <Select
            name="currency"
            id="moeda"
            label="Moeda:"
            onChange={ this.handleChange }
            options={ currencies }
          />
          <Select
            name="method"
            id="pagamento"
            label="Método de pagamento"
            onChange={ this.handleChange }
            options={ payments }
          />
          <Select
            name="tag"
            id="tag"
            label="Tag:"
            onChange={ this.handleChange }
            options={ tags }
          />
          <button type="button" onClick={ this.handleClick }>Adicionar Despesa</button>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  setApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setApi: () => dispatch(fetchCurrencyApi()),
  addExpense: (payload) => dispatch(addExpenciesAction(payload)),
});

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
