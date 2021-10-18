import React from 'react';
import Inputs from './Inputs';
import Select from './Select';

class Formulario extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      dataAPI: [],
    };
    this.handleOnChancge = this.handleOnChancge.bind(this);
    this.requisicaoAPI = this.requisicaoAPI.bind(this);
  }

  componentDidMount() {
    this.requisicaoAPI();
  }

  handleOnChancge({ target }) {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.cheked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async requisicaoAPI() {
    const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await endpoint.json();
    const data = response;
    this.setState({
      dataAPI: data,
    });
  }

  render() {
    const { valor, descricao, dataAPI } = this.state;
    const API = dataAPI.length === 0 ? ['Carregando...'] : dataAPI;
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categoria = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Inputs
          type="number"
          name="Valor"
          value={ valor }
          onChange={ this.handleOnChancge }
        />
        <Inputs
          type="text"
          name="Descrição"
          value={ descricao }
          onChange={ this.handleOnChancge }
        />
        {/* Moeda que sera registrado a despesa - requisisao pela API */}
        <Select
          escolha={ API }
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
