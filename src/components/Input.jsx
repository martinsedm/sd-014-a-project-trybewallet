import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, tag, func, value } = this.props;
    return (
      <label htmlFor={ id }>
        {`${tag}: `}
        <input
          id={ id }
          name={ id }
          type={ id }
          value={ value }
          onChange={ func }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Input;
