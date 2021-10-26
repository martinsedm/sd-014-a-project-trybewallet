import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { onChange, options } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          data-testid="moeda"
          id="moeda"
          name="moeda"
          onChange={ onChange }
        >
          { options.map((opt) => <option key={ opt } value={ opt }>{ opt }</option>) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
};
