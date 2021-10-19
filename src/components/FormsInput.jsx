import React from 'react';

class FormsInput extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="input-valor">
          Valor
          <input
            type="number"
            id="input-valor"
            name="value"
          />
        </label>
        <label htmlFor="input-descrição">
          Descrição
          <input
            type="text"
            id="input-descrição"
            name="description"
          />
        </label>
      </>
    );
  }
}

export default FormsInput;
