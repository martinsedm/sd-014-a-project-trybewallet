import React from 'react';

class AddDesp extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     resultado: [],
  //   };
  //   this.getAPI = this.getAPI.bind(this);
  // }

  // componentDidMount() {
  //   async function getAPI() {
  //     const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  //     const responseJson = await response.json();
  //     this.setState = { resultado: [responseJson] };
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form submit={ (e) => this.handleSubmit(e) }>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="Valor" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input type="text" name="Descrição" id="descrição" />
        </label>
        <label htmlFor=" moeda">
          Moeda:
          <select type="text" name="Moeda" id="moeda">
            <option>a</option>
          </select>
        </label>
        <label htmlFor="mpagamento">
          Método de pagamento:
          <select type="text" name="mpagamento" id="mpagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select type="text" name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="submit" id="submit" name="submit">Adicionar despesa</button>
      </form>
    );
  }
}

export default AddDesp;
