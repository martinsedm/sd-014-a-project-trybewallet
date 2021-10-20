import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      moeda: [],
      formaPagamento: '',
      tag: '',
      descricao: '',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { valor, descricao, moeda, formaPagamento, tag } = this.state;
    const { estadoMoeda } = this.props;
    const arrayMoeda = Object.keys(estadoMoeda);
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            value={ valor }
            type="number"
            name="valor"
            onChange={ this.handleChange }
            id="valor"
          />
        </label>
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
        <Select
          formaPagamento={ formaPagamento }
          tag={ tag }
          onChange={ this.handleChange }
        />
        <label htmlFor="descricao">
          Descrição
          <input
            value={ descricao }
            type="text"
            name="descricao"
            onChange={ this.handleChange }
            id="descricao"
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  estadoMoeda: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  estadoMoeda: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(Form);
