import React from 'react';
import P from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { props: { email } } = this;
    return (
      <header>
        <h1>
          TrybeWallet
        </h1>
        <div>
          <span data-testid="email-field">{email}</span>
          <div>
            <span data-testid="total-field">0</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: P.string.isRequired,
};

export default connect(mapStateToProps)(Header);
