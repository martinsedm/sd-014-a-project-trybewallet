import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);

    this.state = {
      valor: '',
      descricao: '',
      moeda: 'BRL',
      metodoPagamento: 'Dinheiro',
      categoria: '',
    };
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(name, value);
  }

  render() {
    const { valor, descricao, moeda, metodoPagamento, categoria } = this.state;
    return (
      <div>
        <Header moeda={ moeda } />
        <form>
          <Input nome="valor" tipo="text" value={ valor } onChange={ this.onChange } />
          <Input
            nome="Descrição"
            tipo="textbox"
            value={ descricao }
            onChange={ this.onChange }
          />
          <Select nome="moeda" value={ moeda } />
          <Select
            nome="Método de Pagamento"
            value={ metodoPagamento }
            onChange={ this.onChange }
          />
          <Select nome="tag" value={ categoria } onChange={ this.onChange } />
        </form>
      </div>);
  }
}

export default Wallet;
