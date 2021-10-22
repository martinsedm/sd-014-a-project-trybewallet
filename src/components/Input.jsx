import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, label } = this.props;
    return (
      <label htmlFor={ id }>
        {`${label}: `}
        <input
          id={ id }
          name={ id }
          type={ id }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
