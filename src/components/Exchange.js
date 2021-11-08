import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrenciesThunk } from '../actions/index';

class Exchange extends React.Component {
  componentDidMount() {
    const { setCurrentAPI } = this.props;
    setCurrentAPI();
  }

  render() {
    const { handleChange, currencies, moeda, pagamento, despesa } = this.props;

    return (
      <div>
        <label htmlFor="despesa">
          Valor
          <input
            type="text"
            id="despesa"
            value={ despesa }
            name="despesa"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            type="text"
            id="moeda"
            value={ moeda }
            name="moeda"
            onChange={ handleChange }
          >
            {currencies.map((data, keys) => (
              <option key={ keys } value={ data }>{ data }</option>
            )) }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            type="text"
            id="pagamento"
            name="pagamento"
            value={ pagamento }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentAPI: () => dispatch(getCurrenciesThunk()),
});

Exchange.propTypes = {
  handleChange: PropTypes.func.isRequired,
  setCurrentAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  moeda: PropTypes.string.isRequired,
  pagamento: PropTypes.string.isRequired,
  despesa: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
