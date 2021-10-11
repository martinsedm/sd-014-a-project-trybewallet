import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { tags } from '../data';

export default class TagInput extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="tag" className="text-white d-flex">
        Tag:
        <select
          name="tag"
          id="tag"
          className="form-select ms-2"
          onChange={ onChange }
          value={ value }
        >
          { tags.map(({ id, name }) => (
            <option value={ id } key={ id }>{name}</option>
          ))}

        </select>

      </label>
    );
  }
}

TagInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
