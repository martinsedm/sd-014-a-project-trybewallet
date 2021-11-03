import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenseThunk, sendCurrencyThunk } from '../actions';
import SelectedCurrency from './SelectedCurrency';
import SelectedMethod from './SelectedMethod';
import SelectedTag from './SelectedTag';
import Textos from './Textos';

class FormExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      value: 0,
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Lazer',
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatchCurrency } = this.props;
    dispatchCurrency();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { expensesProps } = this.props;
    expensesProps(this.state);
    let { id } = this.state;
    id += 1;
    this.setState({
      id,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Textos
          text="Valor"
          name="value"
          type="number"
          value={ value }
          onChange={ this.handleChange }
        />
        <Textos
          text="Descrição"
          name="description"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectedCurrency
          text="Moeda"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        />
        <SelectedMethod
          name="method"
          value={ method }
          onChange={ this.handleChange }
        />
        <SelectedTag
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
        />
        <button type="submit" onClick={ this.handleClick }>
          Adicionar Despesa
        </button>
      </form>
    );
  }
}
// não posso chamar o thunk direto no componente, então passo ele como props através da dispatchCurrency
const mapDispatchToProps = (dispatch) => ({
  dispatchCurrency: () => dispatch(sendCurrencyThunk()),
  expensesProps: (arrayLocal) => dispatch(expenseThunk(arrayLocal)),
});
const mapStateToProps = (state) => ({
  currencyProps: state.wallet.currencies,
});

FormExpense.propTypes = {
  dispatchCurrency: PropTypes.func.isRequired,
  expensesProps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
