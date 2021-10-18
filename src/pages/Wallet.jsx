import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  handleTotal = () => {
    const { walletState: { expenses } } = this.props;

    const newTotal = expenses.reduce((acc, item) => {
      const convertion = Number(item.value)
      * Number(item.exchangeRates[item.currency].ask);
      return acc + convertion;
    }, 0);

    this.setState({ total: newTotal });
  }

  render() {
    const { total } = this.state;

    const { loginEmail } = this.props;

    return (
      <div>
        <header data-testid="email-field">
          {loginEmail || 'Usuário não logado'}
          <section data-testid="total-field">
            {total}
          </section>
          <section data-testid="header-currency-field">
            BRL
          </section>
        </header>
        <Form handleTotal={ this.handleTotal } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
  walletState: state.wallet,
});

Wallet.propTypes = {
  loginEmail: PropTypes.string.isRequired,
  walletState: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
