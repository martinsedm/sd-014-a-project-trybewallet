import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import Input from './Input';
import { fetchApiMoedas, salvarEstadoInput } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { estadoInput, apiCambio } = this.props;
    apiCambio();
    // this.setState({ exchangeRates: estadoGlobalInput });
    estadoInput(this.state);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { estadoMoeda } = this.props;
    const arrayMoeda = Object.keys(estadoMoeda);
    return (
      <form>
        <Input
          value={ value }
          description={ description }
          onChange={ this.handleChange }
        />
        <label htmlFor="currency">
          Moeda
          <select
            value={ currency }
            type="text"
            name="currency"
            onChange={ this.handleChange }
            id="currency"
          >
            {arrayMoeda.map((siglaMoeda) => (
              <option key={ siglaMoeda }>
                {siglaMoeda}
              </option>
            ))}
          </select>
        </label>
        <Select method={ method } tag={ tag } onChange={ this.handleChange } />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  estadoMoeda: PropTypes.arrayOf.isRequired,
  estadoInput: PropTypes.func.isRequired,
  apiCambio: PropTypes.func.isRequired,
  // estadoGlobalInput: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  estadoMoeda: state.wallet.currencies,
  // estadoGlobalInput: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  estadoInput: (inputValue) => dispatch(salvarEstadoInput(inputValue)),
  apiCambio: () => dispatch(fetchApiMoedas()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
