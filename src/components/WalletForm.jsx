import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  currenciesOptions() {
    const { currencies } = this.props;
    return currencies.map((currencie) => (
      <option key={ currencie } value={ currencie }>{ currencie }</option>));
  }

  render() {
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <form>
        <div className="input">
          <label htmlFor="valor">
            Valor:
            <input type="text" name="Valor" id="valor" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              { this.currenciesOptions() }
            </select>
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input name="descricao" id="descricao" />
          </label>
        </div>
        <div className="select">
          <label htmlFor="método de pagamento">
            Método de pagamento:
            <select id="método de pagamento">
              { payment.map((method) => (
                <option key={ method } name={ method } value={ method }>
                  { method }
                </option>
              )) }
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              { tag.map((tags) => (
                <option key={ tags } name={ tags } value={ tags }>
                  { tags }
                </option>
              )) }
            </select>
          </label>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Form);
