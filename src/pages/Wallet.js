import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userLogged } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ userLogged }</span>
        { ' ' }
        <span data-testid="total-field">0</span>
        { ' ' }
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogged: state.user.email,
});

Wallet.propTypes = ({
  userLogged: PropTypes.string.isRequired,
});

export default connect(mapStateToProps)(Wallet);
