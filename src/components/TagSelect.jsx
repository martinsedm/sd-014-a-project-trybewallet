import React from 'react';
import PropTypes from 'prop-types';

class TagSelect extends React.Component {
  render() {
    const options = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { onChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          name="tag"
          id="tag"
          onChange={ onChange }
        >
          { options.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>)) }
        </select>
      </label>
    );
  }
}

TagSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TagSelect;
