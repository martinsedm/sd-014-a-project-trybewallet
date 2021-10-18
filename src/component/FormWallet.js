import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem, fetchAPI } from '../actions';

class FormWallet extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { setFetchAPI } = this.props;
    setFetchAPI();
  }

  onClick(e) {
    e.preventDefault();
    const { saveExpense, setFetchAPI } = this.props;
    setFetchAPI();
    saveExpense(this.state);
  }

  renderMethod() {
    const { method } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="method-input">
        Método de Pagamento
        <select
          id="method-input"
          value={ method }
          onChange={ (e) => this.setState({ method: e.target.value }) }
        >
          { methods.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          )) }

        </select>
      </label>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    const { currenciesNames } = this.props;
    return (
      <label htmlFor="currency-input">
        Moeda
        <select
          value={ currency }
          id="currency-input"
          onChange={ (e) => this.setState({ currency: e.target.value }) }
        >
          { (currenciesNames || []).map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          )) }
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag-input">
        Tag
        <select
          value={ tag }
          id="tag-input"
          onChange={ (e) => this.setState({ tag: e.target.value }) }
        >
          { tags.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          )) }
        </select>
      </label>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor
            <input
              type="number"
              id="value-input"
              value={ value }
              onChange={ (e) => this.setState({ value: e.target.value }) }
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              type="text"
              id="description-input"
              value={ description }
              onChange={ (e) => this.setState({ description: e.target.value }) }
            />
          </label>
          { this.renderCurrency() }
          { this.renderMethod() }
          { this.renderTag() }
          <button
            type="submit"
            className="add-spend-btn"
            onClick={ this.onClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currenciesNames: wallet.currenciesNames,
  exchangeRates: wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchAPI: () => dispatch(fetchAPI()),
  saveExpense: (expense) => dispatch(addItem(expense)),
});

FormWallet.propTypes = {
  currenciesNames: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFetchAPI: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
