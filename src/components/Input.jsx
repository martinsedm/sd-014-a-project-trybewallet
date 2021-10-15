import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, id, placeholder, label } = this.props;
    return (
      <form>
        <label htmlFor={ id }>
          { label }
          <input
            type={ type }
            name={ name }
            id={ id }
            placeholder={ placeholder }
          />
        </label>
      </form>
    );
  }
}

export default Input;
