import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  createInputs(inputId, name, type, value) {
    return (
      <input
        data-testid={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      />
    );
  }

  createSelectMoeda(inputId, name, type, value) {
    return (
      <select
        data-testid={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      >
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
      </select>
    );
  }

  createSelectPagamento(inputId, name, type, value) {
    return (
      <select
        data-testid={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      >
        <option value="dinheiro">Dinheiro</option>
        <option value="credito">Cartão de crédito</option>
        <option value="debito">Cartão de débito</option>
      </select>
    );
  }

  createSelectTagDespesa(inputId, name, type, value) {
    return (
      <select
        data-testid={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      >
        <option value="alimentacao">Alimentação</option>
        <option value="lazer">Lazer</option>
        <option value="trabalho">Trabalho</option>
        <option value="transporte">Transporte</option>
        <option value="saude">Saúde</option>
      </select>
    );
  }

  render() {
    const MIN_USER_INPUT = 6;
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor-label">
          Valor:
          {this.createInputs('valor-id', 'valor', 'text', valor)}
        </label>
        <label htmlFor="descricao-label">
          Descrição:
          {this.createInputs('descricao-id', 'descricao', 'text', descricao)}
        </label>
        <label htmlFor="moeda-label">
          Moeda:
          {this.createSelectMoeda('moeda-Select', 'moeda', 'string', moeda)}
        </label>
        <label htmlFor="pagamento-label">
          Método de pagamento:
          {this.createSelectPagamento(
            'pagamento-Select', 'pagamento', 'string', pagamento,
          )}
        </label>
        <label htmlFor="tag-label">
          Tag:
          {this.createSelectTagDespesa('tag-Select', 'tag', 'string', tag)}
        </label>
        <button
          type="button"
          onClick={ this.loginBTNClick }
          data-testid="login-submit-button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserLogin: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
