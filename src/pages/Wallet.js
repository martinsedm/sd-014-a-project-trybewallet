import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormExpense from '../Components/FormExpense';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">
            { email }
          </h2>
          <p data-testid="total-field"> Despesa total: 0</p>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
          <FormExpense />
        </header>
      </div>
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
