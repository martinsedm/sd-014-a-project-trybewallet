import React from 'react';
import PropTypes from 'prop-types';

class SelectTag extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const categorys = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <label htmlFor="tag">
          Tag
          <select
            type="text"
            value={ value }
            name="tag"
            onChange={ onChange }
            id="tag"
          >
            { categorys.map((category) => (
              <option
                key={ category }
                value={ category }
              >
                { category }
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

SelectTag.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectTag;
