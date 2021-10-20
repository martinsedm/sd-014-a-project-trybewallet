import React, { Component } from 'react';

export default class PaymentMethod extends Component {
  constructor() {
    super();
    this.props = {
      method: '',
    };
  }

  handleChange(event) {
    const { method } = this.state;
    this.setState({
      [method]: event.target.value,
    });
  }

  render() {
    const method = this.state;
    return (
      <label htmlFor="payment" className="form-group mr-md-3">
        Método de pagamento:
        <select
          id="payment"
          value={ method }
          className="form-control  btn"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}
