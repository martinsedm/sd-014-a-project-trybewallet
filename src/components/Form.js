import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import Input from './Input';

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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
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
