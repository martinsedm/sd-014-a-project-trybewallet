import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiEconomiaThunk, getApiDebtThunk } from '../actions';
import SelectForm from './SelectForm';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const pays = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class FormAddDebt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getApiSuccess } = this.props;
    getApiSuccess();
  }

  handleClick(e) {
    e.preventDefault();
    const { id, value, description, currency, method, tag, exchangeRates } = this.state;
    const { addDebt } = this.props;
    addDebt({ id, value, description, currency, method, tag, exchangeRates });
    this.setState({ id: id + 1 });
  }

  handleChange({ target: { value, name } }) {
    // const { currencies } = this.props;
    // const moedaUSD = currencies.reduce((a, e) => a.concat(...Object.values(e)), [])[0];
    // const bidUSD = moedaUSD.bid;
    this.setState({ [name]: value/* , bid: +bidUSD  */ });
    // if (name === 'moeda') {
    //   const moedaCurret = currencies.reduce((a, e) => a
    //     .concat(...Object.values(e)), []).find((a) => a.code === value);
    //   this.setState({ bid: +moedaCurret.bid });
    // }
  }

  render() {
    const { currencies } = this.props;
    const codes = currencies.reduce((a, e) => Object.keys(e), []);
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            onChange={ this.handleChange }
            required
          />
        </label>
        {/* { console.log(this.state, 'this.state') } */}
        {/* { console.log(this.props, 'this.props') } */}
        <SelectForm
          label="Moeda"
          name="currency"
          event={ this.handleChange }
          options={ codes }
        />
        <SelectForm
          label="Método de pagamento"
          name="method"
          event={ this.handleChange }
          options={ pays }
        />
        <SelectForm
          label="Tag"
          name="tag"
          event={ this.handleChange }
          options={ tags }
        />
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getApiSuccess: () => dispatch(getApiEconomiaThunk()),
  addDebt: (payload) => {
    const action = getApiDebtThunk(payload);
    dispatch(action);
  },
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormAddDebt.propTypes = {
  getApiSuccess: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormAddDebt);
