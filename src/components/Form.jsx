import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getValueThunk, expense } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async handleClick() {
    const { addExpense } = this.props;
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const chaveJson = await fetchApi.json();
    await delete chaveJson.USDT;
    this.setState({
      exchangeRates: chaveJson,
    }, () => {
      const { description, currency, value, method, tag, exchangeRates } = this.state;
      addExpense({ description, currency, value, method, tag, exchangeRates });
    });
  }

  // função genérica
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;
    return (

      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="value" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="describe">
          Descrição:
          <input type="text" name="description" id="describe" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" onChange={ this.handleChange }>
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>{ currency }</option>))}
            ;
          </select>
        </label>

        <label htmlFor="pag">
          Método de pagamento:
          <select name="method" id="pag" onChange={ this.handleChange }>
            {methods.map((method, index) => (
              <option value={ method } key={ index }>{method}</option>
            ))}

          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag" onChange={ this.handleChange }>
            {tags.map((tag, index) => (
              <option value={ tag } key={ index }>{tag}</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>

    );
  }
}

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });
const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getValueThunk()),
  addExpense: (state) => dispatch(expense(state)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
