import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <h1>TrybeWallet</h1>
        <h3
          data-testid="email-field"
        >
          { email }
        </h3>
        <h4
          data-testid="total-field"
        >
          Despesa total: 0
        </h4>
        <h4
          data-testid="header-currency-field"
        >
          BRL
        </h4>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProp = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProp)(Header);
