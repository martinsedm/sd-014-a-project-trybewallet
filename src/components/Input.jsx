import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, title, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        {title}
        <input
          type="text"
          className="form-control"
          onChange={ onChange }
          id={ id }
          value={ value }
          name={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
