import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAPIThunk } from '../actions';

import Inputs from './Inputs';
import Select from './Select';

class Formulario extends React.Component {
  constructor() {
    super();
    this.state = {
      Valor: '',
      Descricao: '',
      Moeda: '',
    };
    this.handleOnChancge = this.handleOnChancge.bind(this);
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

  render() {
    const { moedas } = this.props;
    const arrayMoedas = Object.keys(moedas);

    const { Valor, Descricao } = this.state;
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categoria = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Inputs
          type="number"
          name="Valor"
          value={ Valor }
          onChange={ this.handleOnChancge }
        />
        <Inputs
          type="text"
          name="Descrição"
          value={ Descricao }
          onChange={ this.handleOnChancge }
        />
        {/* Moeda que sera registrado a despesa - requisisao pela API */}
        <Select
          escolha={ arrayMoedas }
          name="Moeda"
        />
        {/* Metodo de pagamento */}
        <Select
          escolha={ pagamento }
          name="Método de pagamento"
        />
        {/* categoria */}
        <Select
          escolha={ categoria }
          name="Tag"
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  moedasAPI: () => dispatch(getAPIThunk()),
});

Formulario.propTypes = {
  moedasAPI: PropTypes.func.isRequired,
  moedas: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
