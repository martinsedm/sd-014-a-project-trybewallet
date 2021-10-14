import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h2 data-testid="email-field">{email}</h2>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">0 BRL</span>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
