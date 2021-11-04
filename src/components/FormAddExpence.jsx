import React from 'react';
// import PropsTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Button from './Button';

class FormAddExpence extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      currency: '',
      payMethod: '',
      tag: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, currency, payMethod, tag, description } = this.state;
    const payMethodOpt = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOpt = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const currencyOpt = [];
    return (
      <form>
        <Input
          type="number"
          name="value"
          label="Valor"
          value={ value }
          onChange={ this.handleChange }
        />
        <Select
          name="currency"
          label="Moeda"
          value={ currency }
          options={ currencyOpt }
          onChange={ this.handleChange }
        />
        <Select
          name="payMethod"
          label="Método de pagamento"
          value={ payMethod }
          options={ payMethodOpt }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          label="Tag"
          value={ tag }
          options={ tagOpt }
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          name="description"
          label="Descrição"
          value={ description }
          onChange={ this.handleChange }
        />
        <Button
          name="button"
          label="Entrar"
          onClick={ this.onSubmitForm }
        />
      </form>
    );
  }
}

// FormAddExpence.propTypes = {
//   type: PropsTypes.string.isRequired,
//   name: PropsTypes.string.isRequired,
//   onChange: PropsTypes.func.isRequired,
//   value: PropsTypes.string.isRequired,
//   testId: PropsTypes.string.isRequired,
// };

export default FormAddExpence;
