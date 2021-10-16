import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormSelect from '../components/FormSelect';
import { paymentOptions, currencyOptions, tagOptions } from '../data';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'Dólar',
      payment: 'dinheiro',
      tag: 'alimentação',
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field"> 0 </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  renderForm() {
    const { value, description, currency, payment, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="text"
            onChange={ this.handleChange }
            value={ value }
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            onChange={ this.handleChange }
            value={ description }
            id="description"
          />
        </label>
        <FormSelect
          id="currency"
          infoArray={ currencyOptions }
          onChange={ this.handleChange }
          label="Moeda"
          value={ currency }
        />
        <FormSelect
          id="payment"
          infoArray={ paymentOptions }
          onChange={ this.handleChange }
          label="Método de pagamento"
          value={ payment }
        />
        <FormSelect
          id="tag"
          infoArray={ tagOptions }
          onChange={ this.handleChange }
          label="Tag"
          value={ tag }
        />
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        { this.renderForm() }
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
