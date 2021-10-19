import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { nome, tipo, label, role, onChange, value } = this.props;
    return (
      <div>
        <label htmlFor={ nome }>
          { label }
          :
          <input
            type={ tipo }
            role={ role }
            id={ nome }
            name={ nome }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  nome: PropTypes.string,
  onChange: PropTypes.func,
  tipo: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
