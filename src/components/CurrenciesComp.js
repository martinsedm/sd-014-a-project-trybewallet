import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createOptions } from '../utils/getRatesAPI';

export default class CurrenciesComp extends Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };

    this.createCurrencies = this.createCurrencies.bind(this);
  }

  componentDidMount() {
    this.createCurrencies();
  }

  async createCurrencies() {
    const moedas = await createOptions();
    this.setState({ moedas });
  }

  handleChange(event) {
    const { moedas } = this.state;
    this.setState({
      [moedas]: event.target.value,
    });
  }

  render() {
    const { moedas } = this.state;
    return (
      <label htmlFor="coin" className="form-group mr-md-3">
        Moeda:
        <select id="coin" className="form-control  btn">
          {moedas.map((rate) => (
            <option value={ rate } key={ rate }>
              {rate}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

CurrenciesComp.propTypes = {
  map: PropTypes.func,
}.isRequired;
