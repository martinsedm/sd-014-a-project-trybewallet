import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, label } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          {label}
          <input data-testid={ id } />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
