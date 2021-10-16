import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

class FormWallet extends Component {
  constructor() {
    super();

    this.state = {
      // value: 0,
      // description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    };
  }

  componentDidMount() {
    const { setFetchAPI } = this.props;
    setFetchAPI();
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
        >
          { currenciesNames.map((item, index) => (
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
        >
          { tags.map((item, index) => (
            <option key={ index } value={ item }>{ item }</option>
          )) }
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor
            <input
              type="number"
              id="value-input"
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              type="text"
              id="description-input"
            />
          </label>
          { this.renderCurrency() }
          { this.renderMethod() }
          { this.renderTag() }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesNames: state.wallet.currenciesNames,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchAPI: () => dispatch(fetchAPI()),
});

FormWallet.propTypes = {
  currenciesNames: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFetchAPI: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
