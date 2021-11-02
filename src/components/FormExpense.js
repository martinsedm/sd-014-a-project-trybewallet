// Página de Formulário de despesa.

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPIMoeda } from '../actions';

class FormExpense extends React.Component {
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
    const { definirValorMoedas } = this.props;
    definirValorMoedas();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          valor:
          <input
            id="valor"
            type="number"
            value={ valor }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            value={ descricao }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" value={ moeda }>
            {currencies.map((moedas) => (<option key={ moedas }>{moedas}</option>))}
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento:
          <select id="metodoPagamento" value={ pagamento }>
            <option id="dinheiro">Dinheiro</option>
            <option id="credito">Cartão de crédito</option>
            <option id="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag }>
            <option id="alimentacao">Alimentação</option>
            <option id="lazer">Lazer</option>
            <option id="trabalho">Trabalho</option>
            <option id="transporte">Transporte</option>
            <option id="saúde">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar despesa</button>
      </form>);
  }
}

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  definirValorMoedas: (moedas) => dispatch(fetchAPIMoeda(moedas)),
});

FormExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  definirValorMoedas: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
