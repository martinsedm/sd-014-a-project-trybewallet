import React from 'react';
import PropTypes from 'prop-types';
import { getCoin } from '../services/api';

class MoedaApi extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const moeda = await getCoin();
    this.setState({ coins: moeda });
  }

  render() {
    const { coins } = this.state;
    const { handle, moeda } = this.props;

    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" name="moeda" onChange={ handle } value={ moeda }>
          {coins.map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
        </select>
      </label>
    );
  }
}

MoedaApi.propTypes = {
  moeda: PropTypes.string,
  handle: PropTypes.func,
};

MoedaApi.defaultProps = {
  moeda: '',
  handle: null,
};

export default MoedaApi;
