import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'Dólar',
      payment: 'dinheiro',
      tag: 'alimentação',
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field"> 0 </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  renderForm() {
    const { value, description, currency, payment, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            onChange={ this.handleChange }
            value={ value }
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            onChange={ this.handleChange }
            value={ description }
            id="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            onChange={ this.handleChange }
            value={ currency }
            id="currency"
          >
            <option value="dolar">Dolar</option>
            <option value="plutao">Plutao</option>
            <option value="hue">Hue</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            name="payment"
            onChange={ this.handleChange }
            value={ payment }
            id="payment"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de Crédito</option>
            <option value="débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            onChange={ this.handleChange }
            value={ tag }
            id="tag"
          >
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        { this.renderForm() }
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
