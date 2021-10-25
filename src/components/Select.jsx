import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  renderOptions(options) {
    return options.map((option) => (
      <option
        key={ option }
        value={ option }
      >
        { option }
      </option>
    ));
  }

  render() {
    const { htmlFor, text, options } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { text }
        <select
          name={ htmlFor }
          id={ htmlFor }
        >
          { this.renderOptions(options) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  options: [],
};

export default Select;
