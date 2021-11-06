import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestAPI } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  optionsWithAPI() {
    const { currencies } = this.props;
    return currencies.map((curr, index) => (
      <option key={ index } value={ curr }>{ curr }</option>
    ));
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" name="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" id="descrição" name="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            {this.optionsWithAPI() }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" id="categoria">
            <option value="alimentaçao">Alimentação</option>
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(requestAPI()),
});

Form.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
