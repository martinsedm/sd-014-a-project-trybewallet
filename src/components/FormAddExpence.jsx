import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses } from '../actions/index';
import Input from './Input';
import Select from './Select';
import Button from './Button';

class FormAddExpence extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      payMethod: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      expenses: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { id, value, currency, payMethod, tag, description, expenses } = this.state;
    // const newId = id + 1;
    this.setState({
      id: id + 1,
      expenses: [...expenses, {
        value,
        currency,
        payMethod,
        tag,
        description,
        id,
      }],
    });
    const { dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
  }

  render() {
    const { value, currency, payMethod, tag, description } = this.state;
    const { currencies } = this.props;
    const payMethodOpt = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOpt = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          type="number"
          name="value"
          label="Valor"
          value={ value }
          onChange={ this.handleChange }
        />
        <Select
          name="currency"
          label="Moeda"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          name="payMethod"
          label="Método de pagamento"
          value={ payMethod }
          options={ payMethodOpt }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          label="Tag"
          value={ tag }
          options={ tagOpt }
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          name="description"
          label="Descrição"
          value={ description }
          onChange={ this.handleChange }
        />
        <Button name="button" label="Adicionar despesa" onClick={ this.handleClick } />
      </form>
    );
  }
}

FormAddExpence.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (state) => dispatch(setExpenses(state.expenses)),
});

export default connect(null, mapDispatchToProps)(FormAddExpence);
