import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);

    /* this.state = {
      currencies: [],
      expenses: [],
    }; */
  }

  renderHeader(email) {
    return (
      <header>
        TrybeWallet
        <div data-testid="email-field">
          {`Email: ${email}`}
        </div>
        <div>
          <div data-testid="total-field">
            {`Despesa Total: R$ ${0}`}
          </div>
          <span data-testid="header-currency-field">BRL</span>
        </div>

      </header>);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        {this.renderHeader(email)}
        <Form />

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  /* expenses: PropTypes.string.isRequired, */
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
