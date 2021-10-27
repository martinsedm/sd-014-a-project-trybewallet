import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const tag = ['Alimentação', 'Transporte', 'Lazer', 'Trabalho', 'Saúde', 'Outros'];
const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const currency = ['BRL', 'USD', 'EUR'];

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.createInput = this.createInput.bind(this);
  }

  createInput(id, type, value) {
    return (
      <>
        <form>
          <label htmlFor={ id }>
            { value }
            <input type={ type } name={ id } id={ id } />
          </label>
        </form>
        <p />
      </>
    );
  }

  createSelect(id, obj, value) {
    return (
      <>
        <form>
          <label htmlFor={ id }>
            { value }
            <select name={ id } id={ id }>
              { obj.map((element, i) => (
                <option key={ i } value={ element }>{ element }</option>
              ))}
            </select>
          </label>
        </form>
        <p />
      </>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <p />
        { this.createInput('value', 'text', 'Valor:') }
        { this.createInput('description', 'text', 'Descrição:') }
        { this.createSelect('currency', currency, 'Moeda:') }
        { this.createSelect('payment', payment, 'Método de pagamento:') }
        { this.createSelect('tag', tag, 'Tag:') }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.user.email,
  };
}

export default connect(mapStateToProps, null)(Wallet);
