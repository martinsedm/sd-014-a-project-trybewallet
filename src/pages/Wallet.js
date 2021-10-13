import React from 'react';
import { connect } from 'react-redux';
import '../css/Wallet.css';

class Wallet extends React.Component {
  render() {
    const { email, total } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{total || 0}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
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
