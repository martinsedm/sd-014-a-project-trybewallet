import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { apiCall } = this.props;
    apiCall();
  }

  renderOptions() {
    const { currencies } = this.props;
    return currencies.filter((currency) => currency !== 'USDT')
      .map((currency, index) => (
        <option key={ index } value={ currency }>{ currency }</option>
      ));
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          {' '}
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="descrição">
          {' '}
          Descrição:
          {' '}
          <input type="text" id="descrição" name="descrição" />
        </label>
        <label htmlFor="moeda">
          {' '}
          Moeda:
          {' '}
          <select id="moeda" name="moeda">
            { this.renderOptions() }
          </select>
        </label>
        <label htmlFor="pagamento">
          {' '}
          Método de pagamento:
          {' '}
          <select id="pagamento" name="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="débito">Cartão de crédito</option>
            <option value="crédito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          {' '}
          Tag:
          {' '}
          <select id="tag" name="tag">
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
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  apiCall: () => dispatch(fetchAPI()),
});

Form.propTypes = {
  apiCall: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
