import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Tag extends Component {
  render() {
    const { change, value } = this.props;
    return (
      <label htmlFor="tag">
        {'Tag: '}
        <select name="tag" id="tag" onChange={ change } value={ value }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  change: PropTypes.func,
}.isRequired;

export default Tag;
