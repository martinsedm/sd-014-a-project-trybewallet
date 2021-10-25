import PropTypes from 'prop-types';
import React from 'react';

class Select extends React.Component {
  render() {
    const { info, saveUserInfo } = this.props;
    return (
      <label htmlFor="value-cent" onChange={ saveUserInfo }>
        Moeda
        <select id="value-cent" value={ info.currency } name="currency">
          { info.coins.map((value) => (
            <option key={ value.code }>
              { value.code }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  info: PropTypes.shape({
    coins: PropTypes.shape({
      map: PropTypes.func,
    }).isRequired,
    currency: PropTypes.string,
  }).isRequired,
  saveUserInfo: PropTypes.func.isRequired,
};

export default Select;
