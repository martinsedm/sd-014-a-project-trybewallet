import React from 'react';
import { connect } from 'react-redux';
import P from 'prop-types';
import { addCurrenciesThunk } from '../../actions';
import Input from '../Input';
import Select from '../Select';

const PAYMENT = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const CATEGORY = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpendituresForm extends React.Component {
  constructor() {
    super();
    this.state = {
      valueField: 0,
      currency: '',
      payment: 'Dinheiro',
      category: 'Alimentação',
      desc: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valueField, currency, payment, category, desc } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          type="number"
          onChange={ this.handleChange }
          value={ valueField }
          name="valueField"
          testId="value-input"
          label="Valor"
        />
        <Select
          label="Moeda"
          options={ currencies }
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
          id="currency-input"
        />
        <Select
          label="Método de pagamento"
          options={ PAYMENT }
          name="payment"
          value={ payment }
          onChange={ this.handleChange }
          id="payment-input"
        />
        <Select
          label="Tag"
          options={ CATEGORY }
          name="category"
          value={ category }
          onChange={ this.handleChange }
          id="category-input"
        />
        <Input
          type="text"
          onChange={ this.handleChange }
          value={ desc }
          name="description"
          testId="description-input"
          label="Descrição"
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(addCurrenciesThunk()),
});

ExpendituresForm.propTypes = {
  getCurrencies: P.func.isRequired,
  currencies: P.arrayOf(P.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpendituresForm);
