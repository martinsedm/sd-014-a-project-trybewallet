import React from 'react';
import InputForm from './InputForm';
import SelectForm from './SelectForm';

class WalletForm extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   value: 0,
    //   description: '',
    //   currency: '',
    //   method: 'Dinheiro',
    //   tag: '',
    // };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { value, description, currency, method, tag } = this.state;

    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const paymentMethods = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];
    return (
      <div>
        <form>
          <InputForm
            type="text"
            name="despesa"
            label="Valor"
            onChange={ this.handleChange }
          />
          <InputForm
            type="text"
            name="description"
            label="Descrição:"
            onChange={ this.handleChange }
          />
          <SelectForm
            label="Moeda"
            name="currency"
            // options={ }
            onChange={ this.handleChange }
          />
          <SelectForm
            label="Método de pagamento"
            name="method"
            options={ paymentMethods }
            onChange={ this.handleChange }
          />
          <SelectForm
            label="Tag"
            name="tag"
            options={ tagOptions }
            onChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

export default WalletForm;
