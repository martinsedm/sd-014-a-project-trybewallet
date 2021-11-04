import PropTypes from 'prop-types';
import React from 'react';

class Options extends React.Component {
  render() {
    const { currencies, handleChange, value } = this.props;
    return (
      <label htmlFor="coins-options">
        Moeda
        <select
          id="coins-options"
          name="currency"
          value={ value }
          onChange={ handleChange }
        >
          {
            Object.keys(currencies)
              .map((coin) => <option key={ coin } value={ coin }>{coin}</option>)
          }
        </select>
      </label>
    );
  }
}

Options.propTypes = {
  coins: PropTypes.object,
}.isRequired;

export default Options;
