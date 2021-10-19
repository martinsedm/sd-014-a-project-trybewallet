import React from 'react';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  inputValor() {
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          id="value"
          name="value"
        />
      </label>
    );
  }

  inputDescricao() {
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          name="description"
        />
      </label>
    );
  }

  inputSelect() {
    return (
      <label htmlFor="currency">
        Moedas:
        <select
          id="currency"
          name="currency"
          className="moedas"
        >
          <option>Selecione</option>
        </select>
      </label>
    );
  }

  inputPagamento() {
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          name="method"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputTags() {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          name="tag"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ `Despesa total: ${0} ` }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          { this.inputValor() }
          { this.inputDescricao() }
          { this.inputSelect() }
          { this.inputPagamento() }
          { this.inputTags() }
          <button type="button">Adicionar despesa</button>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Wallet;
