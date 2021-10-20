import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectForm extends Component {
  render() {
    const { tag, onChange, value } = this.props;
    const spendings = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ value }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="tag">
          Tag
          <select
            type="text"
            name="tag"
            id="tag"
            value={ tag }
            onChange={ onChange }
          >
            {spendings.map((spending) => (
              <option key={ spending }>{spending}</option>))}
          </select>
        </label>
      </div>
    );
  }
}

SelectForm.propTypes = {
  onChange: PropTypes.func,
  tag: PropTypes.string,
  value: PropTypes.number.isRequired,
};

SelectForm.defaultProps = {
  tag: '',
  onChange: null,
};

export default SelectForm;
