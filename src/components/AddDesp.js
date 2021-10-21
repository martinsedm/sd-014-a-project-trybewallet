import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Loading from './loading';

import { getApiMoneyThunk, addNewExpense } from '../actions';
import CIP from './CriarInputPadrao';

class AddDesp extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      loading: true,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.hC = this.hC.bind(this);
    this.btnSubmit = this.btnSubmit.bind(this);
  }

  componentDidMount() {
    const { getApiMoney } = this.props;
    getApiMoney();
  }

  hC({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async btnSubmit(e) {
    e.preventDefault();
    const { dispatchSetValueExpense } = this.props;
    // const { value, description, loading, currency, method, tag } = this.state;
    dispatchSetValueExpense(this.state);
  }

  render() {
    const { value, description, loading, currency, method, tag } = this.state;
    const { hC } = this;
    const { currencies, expenses } = this.props;
    console.log(expenses);
    const arrayOpt = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const arrayOpP = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <div>
        {loading ? (
          <form>
            <CIP t="text" n="value" v={ value } a="Valor" o={ hC } />
            <CIP t="text" n="description" v={ description } a="Descrição" o={ hC } />
            <label htmlFor="currency">
              Moeda:
              <select name="currency" id="currency" value={ currency } onChange={ hC }>
                {currencies.map((item, index) => (
                  <option key={ index } value={ item }>{item}</option>
                ))}
              </select>
            </label>
            <label htmlFor="method">
              Método de pagamento:
              <select id="method" name="method" value={ method } onChange={ hC }>
                {arrayOpt.map((i) => (<option key={ i } value={ i }>{i}</option>))}
              </select>
            </label>
            <label htmlFor="tag">
              Tag:
              <select name="tag" id="tag" value={ tag } onChange={ hC }>
                {arrayOpP.map((i) => (<option key={ i } value={ i }>{i}</option>))}
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
        ) : <Loading />}
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
  getApiMoney: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDesp);
