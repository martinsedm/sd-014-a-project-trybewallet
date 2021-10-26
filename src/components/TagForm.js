import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TagForm extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag" name="tag" onChange={ handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

TagForm.propTypes = ({
  handleChange: PropTypes.func.isRequired,
});
