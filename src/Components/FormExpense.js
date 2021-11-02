import React from 'react';
import SelectedCurrency from './SelectedCurrency';
import SelectedMethod from './SelectedMethod';
import SelectedTag from './SelectedTag';
import Textos from './textos';

class FormExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      value: 0,
      method: 'Dinheiro',
      currency: 'BRL',
    };
  }

  render() {
    const { value, description, currency, method } = this.state;
    return (
      <form>
        <Textos
          text="Valor"
          name="value"
          type="number"
          value={ value }
          onChange={ this.handleChange }
        />
        <Textos
          text="Descrição"
          name="description"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectedCurrency
          text="Moeda"
          name="moeda"
          value={ currency }
          // onChange={ this.handleCurrencySelect }
        />
        <SelectedMethod
          name="método de pagamento"
          value={ method }
          // onChange={ this.handleMethod }
        />
        <SelectedTag name="tag" onChange={ this.handleChange } />
        <button type="submit" onClick={ this.handleClick }>
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

export default FormExpense;
