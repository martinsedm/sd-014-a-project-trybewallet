import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getCoin } from '../../services/api';

class SelectCoin extends Component {
  constructor() {
    super();
    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.getAPI();
  }

  async getAPI() {
    const currency = await getCoin();
    this.setState({ coins: currency });
  }

  render() {
    const { coins } = this.state;
    const { handle, currency } = this.props;

    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          onChange={ handle }
          value={ currency }
        >
          {coins.map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
        </select>
      </label>
    );
  }
}

SelectCoin.propTypes = {
  currency: PropTypes.string,
  handle: PropTypes.func,
};

SelectCoin.defaultProps = {
  currency: '',
  handle: null,
};

export default SelectCoin;
