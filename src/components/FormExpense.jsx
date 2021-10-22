import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyAPI, requestCurrency } from '../actions';

import Btn from './Btn';
import Inputs from './Inputs';
import Selects from './Selects';

class FormExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleOnClick() {
    const { addSetExpense } = this.props;
    const { id } = this.state;
    addSetExpense(this.state);
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;

    return (
      <form>
        <Inputs
          name="value"
          type="number"
          label="Valor"
          handleOnChange={ this.handleOnChange }
        />
        <Inputs
          name="description"
          type="text"
          label="Descrição"
          handleOnChange={ this.handleOnChange }
        />
        <Selects
          name="currency"
          label="Moeda"
          handleOnChange={ this.handleOnChange }
          options={ currencies }
        />
        <Selects
          name="method"
          label="Método de Pagamento"
          handleOnChange={ this.handleOnChange }
          options={ method }
        />
        <Selects
          name="tag"
          label="Tag"
          handleOnChange={ this.handleOnChange }
          options={ tag }
        />
        <Btn name="Adicionar despesa" handleOnClick={ this.handleOnClick } />
      </form>
    );
  }
}

FormExpense.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  addSetExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addSetExpense: (payload) => dispatch(fetchCurrencyAPI(payload)),
  setCurrencies: () => dispatch(requestCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
