import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { tagOptions, paymentOptions } from '../data';
import { getCurrencies as getCurrenciesAction } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: '',
      payment: '',
      tag: '',
      description: '',
      value: 0.00,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;

    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, payment, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          id="value"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        >
          Valor:
        </Input>
        <Input
          id="description"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        >
          Descrição:
        </Input>
        <Select
          name="currency"
          options={ currencies }
          onChange={ this.handleChange }
          value={ currency }
        >
          Moeda:
        </Select>
        <Select
          name="payment"
          options={ paymentOptions }
          onChange={ this.handleChange }
          value={ payment }
        >
          Método de pagamento:
        </Select>
        <Select
          name="tag"
          options={ tagOptions }
          onChange={ this.handleChange }
          value={ tag }
        >
          Tag:
        </Select>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesAction()),
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
