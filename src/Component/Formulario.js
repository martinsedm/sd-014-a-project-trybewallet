import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAPIThunk, addDespesa } from '../actions';

import Inputs from './Inputs';
import Select from './Select';
import Buttons from './Buttons';

class Formulario extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
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

  handleClick(event) {
    event.preventDefault();
    const { despesa, despesaRegistrada.length } = this.props;
    const id = despesaRegistrada;
    console.log(despesaRegistrada);
    console.log('njfdhsiuofhdsuio');
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
        <button type="submit" onClick={ this.handleClick }>enviar</button>
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
  moedas: PropTypes.objectOf(PropTypes.string).isRequired,
  despesa: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
