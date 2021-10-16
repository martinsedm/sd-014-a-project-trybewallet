import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../../../actions';

class Selects extends Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { moeda, pagamento, tag, handleChange, currencies } = this.props;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda:
          <select
            name="moeda"
            id="moeda"
            value={ moeda }
            onChange={ handleChange }
          >
            {currencies
              .map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select
            name="pagamento"
            id="pagamento"
            value={ pagamento }
            onChange={ handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            name="tag"
            id="tag"
            value={ tag }
            onChange={ handleChange }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
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
  getCurrency: () => dispatch(fetchAPI()),
});

Selects.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  moeda: PropTypes.string.isRequired,
  pagamento: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Selects);
