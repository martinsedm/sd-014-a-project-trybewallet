import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { setEmail } = this.props;
    return (
      <header data-testid="email-field">
        <h1>TrybeWallet</h1>
        <span>{ setEmail }</span>
        <div>
          Despesa Total:
          <span data-testid="total-field">
            0
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  setEmail: state.user.email,
});

Header.propTypes = {
  setEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
