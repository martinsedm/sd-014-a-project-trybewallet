import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputGen from '../components/InputGen';
import Tag from '../components/Tag';
import PaymentForm from '../components/PaymentForm';
import Currency from '../components/Currency';
import '../css/Wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseValue: 0,
      expenseDesc: '',
      expenseTag: '',
      expenseCurrency: '',
      expensePaymentForm: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { expenseValue, expenseDesc,
      expenseTag, expenseCurrency, expensePaymentForm } = this.state;
    const { email, total } = this.props;
    return (
      <>
        <header className="header">
          <p data-testid="email-field">{email || 'Nenhum email'}</p>
          <p data-testid="total-field">{total || 0}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <section>
          <form>
            <InputGen
              config={ ['number', 'expenseValue', 'expenseValue-Input', expenseValue,
                false, 'onChange', 'Valor', 'expenseValue'] }
            />
            <InputGen
              config={ ['text', 'expenseDesc', 'expenseDesc-Input', expenseDesc,
                false, 'onChange', 'Descrição', 'expenseDesc'] }
            />
            <Currency
              name="expenseCurrency"
              value={ expenseCurrency }
              onChange={ this.handleChange }
            />
            <PaymentForm
              name="expensePaymentForm"
              value={ expensePaymentForm }
              onChange={ this.handleChange }
            />
            <Tag
              name="expenseTag"
              value={ expenseTag }
              onChange={ this.handleChange }
            />
          </form>
        </section>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    total: state.wallet.total,
  };
}

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
