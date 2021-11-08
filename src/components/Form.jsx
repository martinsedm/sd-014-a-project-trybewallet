import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestAPI, addExpense, ThunkAPI } from '../actions';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // this.optionsWithAPI = this.optionsWithAPI.bind(this);
  }

  componentDidMount() {
    const { addCoins } = this.props;
    addCoins();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { newExpense } = this.props;
    newExpense(this.state);
  }

  // optionsWithAPI() {
  // const { currencies } = this.props;
  // return currencies.map((curr, index) => (
  //  <option key={ index } value={ curr }>{ curr }</option>
  // ));
  // }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form onSubmit={ this.handleClick }>
        <Input
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
          label="Valor:"
        />
        <Input
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
          label="Descrição:"
        />
        <Select
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
          label="Moeda:"
          options={ currencies }
        />
        <Select
          name="method"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChange }
          value={ method }
          label="Método de pagamento:"
        >
          Método de pagamento
        </Select>
        <Select
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChange }
          value={ tag }
          label="Tag:"
        >
          Tag
        </Select>
        <input type="submit" value="Adicionar despesa" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: (expense) => dispatch(ThunkAPI(expense)),
  addCoins: () => dispatch(requestAPI()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  newExpense: PropTypes.func.isRequired,
  addCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
