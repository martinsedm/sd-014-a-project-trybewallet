import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { htmlFor, label, type } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { label }
        <br />
        <input type={ type } data-testid={ htmlFor } id={ htmlFor } name={ htmlFor } />
        <br />
      </label>
    );
  }
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
