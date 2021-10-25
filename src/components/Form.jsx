import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" name="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            { currencies.map((item) => (
              <option key={ item } value={ item }>{item}</option>
            )) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
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
  getCurrencies: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
