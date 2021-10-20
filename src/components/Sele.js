import React, { Component } from 'react';

class Sele extends Component {
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <label htmlFor="moeda">
          Moeda
          <select
            value={ moeda }
            type="text"
            name="moeda"
            onChange={ this.handleChange }
            id="moeda"
          >
            <option>
              NADA
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default Sele;
