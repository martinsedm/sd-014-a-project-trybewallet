import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { metodosPagamentos, tags } from '../services/metodosPagamentos&Tags';
import { fetchCurrencies } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      valor: 0,
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { loadingCurrencies } = this.props;
    loadingCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    return (
      <form>
        <Input
          nome="Valor:"
          id="campo-valor"
          type="number"
          value={ valor }
          onChange={ this.handleChange }
        />

        <Input
          nome="Descrição:"
          id="descricao"
          type="text"
          value={ descricao }
          onChange={ this.handleChange }
        />

        <Select
          nome="Moeda:"
          id="moeda"
          options={ currencies }
          value={ moeda }
          onChange={ this.handleChange }
        />
        <Select
          nome="Método de pagamento:"
          id="pagamento"
          options={ metodosPagamentos }
          value={ pagamento }
          onChange={ this.handleChange }
        />
        <Select
          nome="Tag:"
          id="tag"
          options={ tags }
          value={ tag }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadingCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    loadingCurrencies: () => dispatch(fetchCurrencies()),
  }
);

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
