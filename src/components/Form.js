import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import Input from './Input';
import { salvarEstadoInput } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      moeda: [],
      pagamento: '',
      tag: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { estadoInput } = this.props;
    estadoInput(this.state);
    console.log(estadoInput);
    console.log('cliquei');
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    const { estadoMoeda } = this.props;
    const arrayMoeda = Object.keys(estadoMoeda);
    return (
      <form>
        <Input valor={ valor } descricao={ descricao } onChange={ this.handleChange } />
        <label htmlFor="moeda">
          Moeda
          <select
            value={ moeda }
            type="text"
            name="moeda"
            onChange={ this.handleChange }
            id="moeda"
          >
            {arrayMoeda.map((siglaMoeda) => (
              <option key={ siglaMoeda }>
                {siglaMoeda}
              </option>
            ))}
          </select>
        </label>
        <Select pagamento={ pagamento } tag={ tag } onChange={ this.handleChange } />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  estadoMoeda: PropTypes.arrayOf.isRequired,
  estadoInput: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  estadoMoeda: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  estadoInput: (inputValue) => dispatch(salvarEstadoInput(inputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
