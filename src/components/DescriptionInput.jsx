import React from 'react';
import PropTypes from 'prop-types';

export default class DescriptionInput extends React.Component {
  render() {
    const { description, onChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ onChange }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
