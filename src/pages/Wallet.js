import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal() {
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
      <main>
        <section>
          <header data-testid="email-field">
            {!loginEmail ? 'Usuário não logado' : loginEmail}
          </header>
          <div data-testid="total-field">
            {total}
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </section>

        <WalletForm handleTotal={ this.handleTotal } />
      </main>
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
