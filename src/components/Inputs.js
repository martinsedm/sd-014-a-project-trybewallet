import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { data: [text, name, value, type, callback] } = this.props;
    return (
      <label htmlFor={ `${name}-id` }>
        { text }
        <input
          type={ type }
          id={ `${name}-id` }
          name={ name }
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Inputs;
