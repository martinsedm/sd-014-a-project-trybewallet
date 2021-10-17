import React from 'react';
import Inputs from './Inputs';
import Select from './Select';

class Formulario extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
    };
    this.handleOnChancge = this.handleOnChancge.bind(this);
  }

  handleOnChancge({ target }) {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.cheked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, descricao } = this.state;
    const escolha = ['nds', 'fdushu', 'fjdshf']; // usado para teste
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
          escolha={ escolha }
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
