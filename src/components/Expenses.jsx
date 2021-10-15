import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    const { price, description, currency, payment, tag } = this.state;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          label="Valor: "
          type="text"
          name={ price }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição: "
          type="text"
          name={ description }
          onChange={ this.handleChange }
        />
        <Select
          label="Moeda: "
          name={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento: "
          name={ payment }
          options={ methods }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag: "
          name={ tag }
          options={ tags }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

Expenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Expenses);
