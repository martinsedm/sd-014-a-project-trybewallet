import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { type, name, value, dataTestid, onKeyUp, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          data-testid={ dataTestid }
          onChange={ onChange }
          onKeyUp={ onKeyUp }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
};

export default Inputs;
