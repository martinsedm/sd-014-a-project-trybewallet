import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { escolha, name } = this.props;
    return (
      <label htmlFor={ name }>
        {name}
        <select id={ name }>
          {escolha.map((item) => <option key={ item }>{ item }</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  escolha: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
