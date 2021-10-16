import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import { exchange, setCurrencies } from '../actions/index';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    const { currencies } = props;
    this.state = {
      id: 0,
      value: 0,
      currency: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: currencies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setCurrenciesToProps } = this.props;
    setCurrenciesToProps();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { id } = this.state;
    this.setState({ id: id + 1 });
    const { setExpenses, totalUpdate } = this.props;
    await setExpenses(this.state);
    totalUpdate();
  }

  render() {
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const paymentMethods = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <InputForm
            type="number"
            name="value"
            label="Valor"
            onChange={ this.handleChange }
          />
          <InputForm
            type="text"
            name="description"
            label="Descrição:"
            onChange={ this.handleChange }
          />
          <SelectForm
            label="Moeda"
            name="currency"
            options={ currencies }
            onChange={ this.handleChange }
          />
          <SelectForm
            label="Método de pagamento"
            name="method"
            options={ paymentMethods }
            onChange={ this.handleChange }
          />
          <SelectForm
            label="Tag"
            name="tag"
            options={ tag }
            onChange={ this.handleChange }
          />
          <button type="button" onClick={ this.handleClick }> adicionar despesa </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (payload) => dispatch(exchange(payload)),
  setCurrenciesToProps: () => dispatch(setCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrenciesToProps: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  totalUpdate: PropTypes.func.isRequired,
};
