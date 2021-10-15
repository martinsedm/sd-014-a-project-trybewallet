import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class PurchaseForm extends React.Component {
  componentDidMount() {
    const { setFetchCurrencies } = this.props;

    setFetchCurrencies();
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              {
                currencies.map((currency) => (
                  <option key={ currency.code }>
                    { currency.code }
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment" id="payment">
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchCurrencies: () => dispatch(fetchCurrencies()),
});

PurchaseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
  setFetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm);
