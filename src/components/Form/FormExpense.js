import React, { Component } from 'react';
import Imputs from './imputs/Imputs';
import Selects from './selects/Selects';

export default class FormExpense extends Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: '',
      pagamento: 'dinheiro',
      tag: 'alimentacao',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    return (
      <form>
        <Imputs
          valor={ valor }
          descricao={ descricao }
          handleChange={ this.handleChange }
        />
        <Selects
          moeda={ moeda }
          pagamento={ pagamento }
          tag={ tag }
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}
