import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectTag extends Component {
  render() {
    const { text, name, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {text}
        <select name={ name } id={ name } onChange={ onChange }>
          <option name="lazer" value="lazer">Lazer</option>
          <option name="transporte" value="transporte">Transporte</option>
          <option name="trabalho" value="trabalho">Trabalho</option>
          <option name="saúde" value="saúde">Saúde</option>
          <option name="alimentação" value="alimentação">Alimentação</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SelectTag;
