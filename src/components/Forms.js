import React from 'react';
import Method from './Method';
import SelectTag from './SelectTag';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      // exchangeRates: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    this.setState({ [name.target.name]: name.target.value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            value={ value }
            type="number"
            name="value"
            onChange={ this.handleChange }
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            value={ description }
            type="text"
            name="description"
            onChange={ this.handleChange }
            id="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            value={ currency }
            type="text"
            name="currency"
            onChange={ this.handleChange }
            id="currency"
          >
            <Method value={ method } onChange={ this.handleChange } />
            <SelectTag value={ tag } onChange={ this.handleChange } />
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
