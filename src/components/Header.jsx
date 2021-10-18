import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <h3 data-testid="email-field">
          email:
          {' '}
          { email }
        </h3>
        <p data-testid="total-field">Despesa total: 0</p>
        <p data-testid="header-currency-field">Câmbio BRL</p>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
