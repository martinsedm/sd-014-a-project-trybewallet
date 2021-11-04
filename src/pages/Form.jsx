import React, { Component } from 'react';
import SelectForm from './SelectForm';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input
              type="number"
              name="valor"
              id="valor"
            />
          </label>

          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              name="descricao"
              id="descricao"
            />
          </label>

          <SelectForm />
        </form>
      </div>
    );
  }
}

export default Form;
