import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpense } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      coins: [],

    };
    this.getValuesOnChange = this.getValuesOnChange.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getInfoCoinAPI();
  }

  async getInfoCoinAPI() {
    const coinAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await coinAPI.json();
    const coins = Object.keys(response).filter((element) => element !== 'USDT');
    this.setState({ coins });
  }

  getValuesOnChange({ target: { value, id } }) {
    this.setState({ [id]: value });
    // adicionar acesso aos valores dos  campos aqui.
    // apos salvar valores no redux.
  }

  handleClick() {
    const { setSaveExpense } = this.props;
    setSaveExpense(this.state);
  }

  renderSelectOptions(coins) {
    return coins.map((coin) => <option key={ coin } value={ coin }>{ coin }</option>);
  }

  renderSelects() {
    const { method, tag } = this.state;
    return (
      <div>
        <label htmlFor="metodo-pagamento">
          Método de pagamento
          <select id="metodo-pagamento" value={ method }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag
          <select id="tag" value={ tag }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { coins, value, description, currency } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            value={ value }
            onChange={ this.getValuesOnChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            value={ description }
            id="description"
            onChange={ this.getValuesOnChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            value={ currency }
            id="currency"
            onChange={ this.getValuesOnChange }
          >
            {this.renderSelectOptions(coins)}
          </select>
        </label>
        { this.renderSelects() }
        {/* renderiza parte do codigo que estava grande */}
        <button onClick={ this.handleClick } type="button">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  setSaveExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setSaveExpense: (expense) => { dispatch(saveExpense(expense)); },
});

export default connect(null, mapDispatchToProps)(Form);
