/* eslint-disable jsx-a11y/control-has-associated-label */
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
      // exchangeRates:'',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    this.setState({ [name.target.name]: name.target.value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              value={ value }
              name="value"
              onChange={ this.handleChange }
              id="value"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              value={ description }
              name="description"
              onChange={ this.handleChange }
              id="description"
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              type="text"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
              id="currency"
            />
          </label>
          <Method value={ method } onChange={ this.handleChange } />
          <SelectTag value={ tag } onChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

export default Forms;
