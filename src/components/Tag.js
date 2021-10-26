import React from 'react';
import PropTypes from 'prop-types';

class Tags extends React.Component {
  render() {
    const { tags } = this.props;
    const [name, tag, onChange] = tags;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          name={ name }
          id="tag"
          value={ tag }
          onChange={ onChange }
        >
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

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default Tags;
