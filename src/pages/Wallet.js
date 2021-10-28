import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, addExpenses } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import ExpenseTable from '../components/ExpenseTable';

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setApi } = this.props;
    setApi();
  }

  handleChange({ target: { name, value } }) { this.setState({ [name]: value }); }

  handleClick(event) {
    event.preventDefault();

    const { addExpense } = this.props;
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
            type="number"
            name="value"
            value={ expenseValue }
            onChange={ this.handleChange }
          />
          <Input
            id="descrição"
            label="Descrição:"
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
            label="Método de pagamento"
            name="method"
            id="pagamento"
            onChange={ this.handleChange }
            options={ methods }
          />
          <Select
            label="Tag:"
            name="tag"
            id="tag"
            onChange={ this.handleChange }
            options={ tags }
          />
          <button type="button" onClick={ this.handleClick }>Adicionar Despesa</button>
        </form>
        <ExpenseTable />
      </>
    );
  }
}

Wallet.propTypes = {
  setApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setApi: () => dispatch(fetchCurrency()),
  addExpense: (payload) => dispatch(addExpenses(payload)),
});

const mapStateToProps = ({ wallet }) => ({ currencies: wallet.currencies });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
