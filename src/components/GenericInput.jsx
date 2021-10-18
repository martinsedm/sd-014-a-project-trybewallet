import React from 'react';

class GenericInput extends React.Component {
  render() {
    const { htmlFor, type, name } = this.props;
    const { value, onChange, id, text } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { text }
        <input
          type={ type }
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default GenericInput;
