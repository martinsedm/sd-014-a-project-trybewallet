import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputGerado } = this.props;
    const [type, name, id, value, onChange, text] = inputGerado;
    return (
      <label htmlFor={ id }>
        {text}
        <input
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputGerado: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default Input;
