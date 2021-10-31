import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { uptdWallet } from '../actions';
import fetchApi from '../services';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tagName: 'Alimentação',
    };
    this.renderValueOption = this.renderValueOption.bind(this);
    this.handdleChange = this.handdleChange.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.handdleClick = this.handdleClick.bind(this);
  }

  componentDidMount() {
    this.renderValueOption();
  }

  handdleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  async handdleClick() {
    const { value, description, currency, method, tagName } = this.state;
    const { updateWallet, expenses } = this.props;
    const request = await fetchApi();
    delete request.USDT;

    const objeto = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag: tagName,
      exchangeRates: request,
    };

    updateWallet(objeto);
  }

  async renderValueOption() {
    const request = await fetchApi();
    delete request.USDT;
    const keys = Object.keys(request);
    const options = [];

    for (let i = 0; i < keys.length; i += 1) {
      const option = (
        <option value={ request[keys[i]].code } key={ request[keys[i]].name }>
          { request[keys[i]].code }
        </option>
      );
      options.push(option);
    }

    this.setState({
      moedas: options,
    });
  }

  renderLabel(name, id, text, type) {
    return (
      <label htmlFor={ id }>
        { text }
        <input
          name={ name }
          id={ id }
          type={ type }
          onChange={ this.handdleChange }
        />
      </label>
    );
  }

  render() {
    const { moedas } = this.state;
    return (
      <form>
        { this.renderLabel('valor', 'value', 'Valor', 'number') }
        { this.renderLabel('descrição', 'description', 'Descrição', 'text') }
        <label htmlFor="currency">
          Moeda
          <select
            name="moeda"
            id="currency"
            onChange={ this.handdleChange }
          >
            { moedas }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="Método de pagamento" id="method" onChange={ this.handdleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tagName">
          Tag
          <select name="tag" id="tagName" onChange={ this.handdleChange }>
            <option name="Alimentação">Alimentação</option>
            <option name="Lazer">Lazer</option>
            <option name="Trabalho">Trabalho</option>
            <option name="Transporte">Transporte</option>
            <option name="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handdleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  updateWallet: PropTypes.func,
  expenses: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  updateWallet: (value) => dispatch(uptdWallet(value)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
