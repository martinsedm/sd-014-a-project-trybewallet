import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenditure: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { expenditure, cambio } = this.state;
    return (

      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          Gasto total:
          {expenditure}
        </p>
        <p data-testid="header-currency-field">
          Câmbio:
          {cambio}
        </p>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email });

export default connect(mapStateToProps, null)(Wallet);
