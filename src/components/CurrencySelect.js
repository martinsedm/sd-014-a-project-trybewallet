// Implementei a logica para preencher as opções do campo Moedas, buscando as siglas das moedas da API dinamicamente.

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPIMoedaThunk } from '../actions';

class CurrenciesSelect extends React.Component {
  componentDidMount() {
    const { definirValorMoedas } = this.props;
    definirValorMoedas();
  }

  render() {
    const { handleChange, currencies } = this.props;
    const filtroMoedas = currencies.filter((moeda) => (moeda !== 'USDT'));
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          onChange={ handleChange }
        >
          { filtroMoedas.map((moeda) => (
            <option key={ moeda } value={ moeda }>{ moeda }</option>
          )) }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  definirValorMoedas: () => dispatch(fetchAPIMoedaThunk()),
});

CurrenciesSelect.propTypes = {
  definirValorMoedas: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesSelect);
