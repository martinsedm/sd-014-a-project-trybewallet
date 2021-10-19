import React from 'react';

class FormWallet extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   value: '',
    //   description: '',
    //   currency: '',
    //   paymentMethod: '',
    //   tagType: '',
    // };
    this.handleChange = this.handleChange.bind(this);
    this.renderPaymentMethods = this.renderPaymentMethods.bind(this);
    this.renderTagCategories = this.renderTagCategories.bind(this);
    this.renderCurrencies = this.renderCurrencies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  renderPaymentMethods() {
    const paymentMethods = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    return paymentMethods.map((payment, index) => (
      <option value={ payment } key={ index }>{ payment }</option>
    ));
  }

  renderTagCategories() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return tags.map((payment, index) => (
      <option value={ payment } key={ index }>{ payment }</option>
    ));
  }

  // renderCurrencies() {
  //   const { currencies } = this.props;
  //   return currencies.map((currency, index) => (
  //     <option value={ currency } key={ index }>{currency}</option>
  //   ));
  // }

  render() {
    // const { value, description, currency, paymentMethod, tagType } = this.state;
    // console.log(value, description, currency, paymentMethod, tagType);
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" name="descrição" id="descrição" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="currency">
            {/* { this.listCurrencies() } */}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            id="pagamento"
            name="paymentMethod"
          >
            { this.renderPaymentMethods() }
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            { this.renderTagCategories() }
          </select>
        </label>
      </form>
    );
  }
}

export default FormWallet;
