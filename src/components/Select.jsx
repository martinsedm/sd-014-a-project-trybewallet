import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { htmlFor, text } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { text }
        <select
          name={ htmlFor }
          id={ htmlFor }
        >
          { text }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Select;
