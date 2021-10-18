import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { data: [text, name, value, type, onChange] } = this.props;
    return (
      <label htmlFor={ `${name}-id` }>
        { text }
        <input
          type={ type }
          id={ `${name}-id` }
          name={ name }
          value={ value }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Inputs;
