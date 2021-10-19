import React from 'react';
import Inputs from './Inputs';
import Select from './Select';
import { requisicaoAPI } from '../actions';

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
    console.log(requisicaoAPI());
  }

  handleOnChancge({ target }) {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.cheked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { Valor, Descricao, Moeda } = this.state;
    // const API = dataAPI.length === 0 ? ['Carregando...'] : dataAPI;
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
          escolha={ Moeda }
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

export default Formulario;
