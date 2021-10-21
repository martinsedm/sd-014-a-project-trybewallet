import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelecMoeda from './SelecMoeda';
import { valorMoedas as valorMoedasAction } from '../actions';
import chamarAPI from '../api/api';

class FormAddDespesa extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.filtrarMoedas = this.filtrarMoedas.bind(this);
    this.clickBut = this.clickBut.bind(this);
  }

  componentDidMount() {
    chamarAPI().then((exchangeRates) => {
      this.setState({
        exchangeRates,
      });
    });
  }

  filtrarMoedas() {
    const { exchangeRates } = this.state;
    const keysMoedas = Object.keys(exchangeRates);
    const moedasValidas = keysMoedas
      .filter((moeda) => moeda !== 'USDT');
    return moedasValidas;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  clickBut() {
    const { value, description, currency, method, tag, id } = this.state;
    const { valorMoedas } = this.props;
    chamarAPI().then((exchangeRates) => {
      const tudo = {
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
      };
      valorMoedas(tudo);
    });
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { handleChange, filtrarMoedas, clickBut } = this;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" name="value" value={ value } onChange={ handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            name="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        <SelecMoeda
          moeda={ currency }
          handleChange={ handleChange }
          filtrarMoedas={ filtrarMoedas }
        />
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            name="method"
            value={ method }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ clickBut }>Adicionar despesa</button>
      </form>
    );
  }
}

FormAddDespesa.propTypes = {
  valorMoedas: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  valorMoedas: (valorMoeda) => dispatch(valorMoedasAction(valorMoeda)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAddDespesa);
