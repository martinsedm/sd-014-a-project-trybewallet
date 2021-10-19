import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import { setCurrencies } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
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
            options={ tagOptions }
            onChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(setCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
