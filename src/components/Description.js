import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Description;
