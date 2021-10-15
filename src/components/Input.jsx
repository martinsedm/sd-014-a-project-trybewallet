import PropTypes from 'prop-types';
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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
