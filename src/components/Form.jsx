import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinsAPI } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { coins } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" id="valor" name="name" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input type="text" id="descrição" name="name" />
          </label>
          <label htmlFor="Moeda">
            Moeda:
            <select name="moeda" id="moeda">
              {coins
                .map((coin) => (
                  <option
                    key={ coin.code + coin.codein }
                    value={ coin.code }
                  >
                    {coin.code}

                  </option>))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select name="pagamento" id="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Tag:
            <select name="pagamento" id="pagamento">
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  getCoins: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(getCoinsAPI()),
});

const mapStateToProps = ({ wallet: { currencies } }) => ({
  coins: currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
