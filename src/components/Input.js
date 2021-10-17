import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ title, id, type }) => (
  <label htmlFor={ id }>
    <h6>{ title }</h6>
    <input id={ id } type={ type } />
  </label>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
