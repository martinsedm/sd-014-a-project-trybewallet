import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getApiMoney } from '../services/getApiMoney';

import { getApiMoneyThunk, addNewExpense } from '../actions';
import CIP from './CriarInputPadrao';

class AddDesp extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: 'USD',
      pag: 'Dinheiro',
      tagf: 'Alimentação',
    };
    this.hC = this.hC.bind(this);
    this.btnSubmit = this.btnSubmit.bind(this);
  }

  hC({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async addExpenseFormatter() {
    const { dispatchSetValueExpense } = this.props;
    const { expenses } = this.props;
    const { valor, descricao, moeda, pag, tagf } = this.state;
    try {
      const response = await getApiMoney();
      const expense = {
        id: expenses.length,
        value: valor,
        description: descricao,
        currency: moeda,
        method: pag,
        tag: tagf,
        exchangeRates: response,
      };
      dispatchSetValueExpense(expense);
    } catch (error) {
      console.log('Error');
    }
  }

  btnSubmit() {
    this.addExpenseFormatter();
  }

  render() {
    const { valor, descricao, moeda, pag, tagf } = this.state;
    const { hC } = this;
    const { currencies } = this.props;
    const arrayTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const arrayMP = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        <form>
          <CIP t="text" n="valor" v={ valor } a="Valor" o={ hC } />
          <CIP t="text" n="descricao" v={ descricao } a="Descrição" o={ hC } />
          <label htmlFor="currency">
            Moeda:
            <select name="moeda" id="currency" value={ moeda } onChange={ hC }>
              {currencies.map((item, index) => (
                <option key={ index } value={ item }>{item}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select id="method" name="pag" value={ pag } onChange={ hC }>
              {arrayMP.map((i) => (<option key={ i } value={ i }>{i}</option>))}
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tagf" id="tag" value={ tagf } onChange={ hC }>
              {arrayTag.map((i) => (<option key={ i } value={ i }>{i}</option>))}
            </select>
          </label>
          <button
            type="button"
            id="button"
            onClick={ this.btnSubmit }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getApiMoney: () => dispatch(getApiMoneyThunk()),
  dispatchSetValueExpense: (valueExpense) => dispatch(addNewExpense(valueExpense)),
});

AddDesp.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchSetValueExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDesp);
