import React from 'react';
import PropTypes from 'prop-types';

export default class InputLogin extends React.Component { // refazendo pra ver se aprendi
  render() {
    const { onChange, name, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            type={ name }
            data-testid={ `${name}-input` }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

InputLogin.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
