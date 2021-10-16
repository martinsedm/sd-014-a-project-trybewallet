import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Form from '../component/Form';
import Header from '../component/Header';
import { fetchCur } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { isFetching, currency } = this.props;
    console.log(isFetching);
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="input-valor">
            Valor
            <input id="input-valor" type="number" name="valor" />
          </label>
          <label htmlFor="input-descricao">
            Descrição
            <input id="input-descricao" type="text" name="descricao" />
          </label>
          <label htmlFor="input-moeda">
            Moeda
            <select name="input-moeda" id="input-moeda">
              {currency.map((moeda, index) => <option key={ index }>{moeda}</option>)}
            </select>
          </label>
          <label htmlFor="input-payment">
            Método de pagamento
            <select name="input-payment" id="input-payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            Tag
            <select name="input-tag" id="input-tag">
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
  getCurrencies: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCur()),
});

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
