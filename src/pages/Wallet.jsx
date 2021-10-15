import React, { Component } from 'react';
import { connect } from 'react-redux';

class Wallet extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <div>
          LOGO
        </div>
        <div>
          <span data-testid="email-field">{ userEmail }</span>
          <span data-testid="total-field">Despesas: 0</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
