import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchApi from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { setFetchApi } = this.props;
    setFetchApi();
  }

  render() {
    const { userLogged, currencies } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ userLogged }</span>
          { ' ' }
          <span data-testid="total-field">0</span>
          { ' ' }
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" name="descricao" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              {currencies.map((currency, index) => (
                <option key={ index } value={ currency }>{ currency }</option>
              ))}
            </select>
          </label>
          <label htmlFor="metodo-pagamento">
            Método de pagamento:
            <select id="metodo-pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogged: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchApi: () => dispatch(fetchApi()),
});
Wallet.propTypes = ({
  userLogged: PropTypes.string.isRequired,
});

Wallet.propTypes = ({
  setFetchApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
