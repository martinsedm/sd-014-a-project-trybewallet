import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">Despesa Total: R$ 0,00</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input type="text" name="descrição" id="descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda" name="moeda">
              <option selected>BRL</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento" name="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
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
