import React from 'react';
import PropTypes from 'prop-types';

class Textos extends React.Component {
  render() {
    const { text, name, type, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <input
          type={ type }
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Textos.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Textos;
