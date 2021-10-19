import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencyApi } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { setApi } = this.props;
    setApi();
  }

  render() {
    const { currencies } = this.props;
    return (
      <>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" value="" onChange="" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" name="descricao" value="" onChange="" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda" onChange="" id="moeda">
              { currencies.map((currency, index) => (
                <option key={ index } value={ currency }>{ currency }</option>
              ))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select name="pagamento" onChange="" id="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao de crédito">Cartão de crédito</option>
              <option value="cartao de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" onChange="" id="tag">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  setApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setApi: () => dispatch(fetchCurrencyApi()),
});

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
