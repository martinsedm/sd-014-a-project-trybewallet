import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAPIThunk, addDespesa } from '../actions';

import Buttons from './Buttons';
import Inputs from './Inputs';
import Select from './Select';

class Formulario extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleOnChancge = this.handleOnChancge.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { moedasAPI } = this.props;
    moedasAPI();
  }

  handleOnChancge({ target }) {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.cheked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    event.preventDefault();
    const { despesa, despesaRegistrada, moedasAPI, moedas } = this.props;
    await moedasAPI();
    await this.setState({
      id: despesaRegistrada.length,
      exchangeRates: moedas,
    });
    despesa(
      this.state,
    );
  }

  render() {
    const { moedas } = this.props;
    const arrayMoedas = Object.keys(moedas);
    const { value, description, currency, method, tag } = this.state;
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categoria = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Inputs
          type="number"
          name="value"
          mgs="Valor"
          value={ value }
          onChange={ this.handleOnChancge }
        />
        <Inputs
          type="text"
          name="description"
          mgs="Descrição"
          value={ description }
          onChange={ this.handleOnChancge }
        />
        <Select
          escolha={ arrayMoedas }
          name="currency"
          msg="Moeda"
          value={ currency }
          onChange={ this.handleOnChancge }
        />
        <Select
          escolha={ pagamento }
          name="method"
          msg="Método de pagamento"
          value={ method }
          onChange={ this.handleOnChancge }
        />
        <Select
          escolha={ categoria }
          name="tag"
          msg="Tag"
          value={ tag }
          onChange={ this.handleOnChancge }
        />
        <Buttons type="submit" onClick={ this.handleClick } msg="Adicionar despesa" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
  despesaRegistrada: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  moedasAPI: () => dispatch(getAPIThunk()),
  despesa: (value) => dispatch(addDespesa(value)),
});

Formulario.propTypes = {
  moedasAPI: PropTypes.func.isRequired,
  moedas: PropTypes.objectOf(PropTypes.object).isRequired,
  despesa: PropTypes.func.isRequired,
  despesaRegistrada: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
