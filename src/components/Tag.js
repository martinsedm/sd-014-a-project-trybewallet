import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag" onChange={ handleChange }>
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
export default Tag;

Tag.propTypes = ({
  handleChange: PropTypes.func.isRequired,
});
