import React, { Component } from 'react';

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
            />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input
              type="text"
              name="descrição"
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select
              name="moeda"
            >
              function a fazer
            </select>
          </label>
          <label htmlFor="tag">
            Método de Pagamento:
            <select
              name="tag"
            >
              function a fazer 2
            </select>
          </label>
        </form>

      </div>
    );
  }
}

export default Form;
