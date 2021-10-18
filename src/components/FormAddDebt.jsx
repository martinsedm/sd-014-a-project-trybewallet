import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiEconomiaThunk } from '../actions';

class FormAddDebt extends Component {
  componentDidMount() {
    const { getApiSuccess } = this.props;
    getApiSuccess();
  }

  render() {
    const { wallet: { currencies } } = this.props;
    return (
      <form>
        {/* { console.log((currencies), 'currencies') }
        { console.log((currencies).map((e) => e[0]), 'currencies[0]') } */}
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {currencies.map((e) => (
              <option key={ e[0] } value={ e[0] }>{ e[0] }</option>)) }
          </select>
        </label>
        <label htmlFor="pagamendo">
          Método de pagamento
          <select id="pagamendo">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getApiSuccess: () => dispatch(getApiEconomiaThunk()),
});

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

FormAddDebt.propTypes = {
  getApiSuccess: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormAddDebt);
