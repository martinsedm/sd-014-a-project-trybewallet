import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormAddExpence from '../components/FormAddExpence';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { savedEmail } = this.props;
    const { totalExpense, currency } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <h3 data-testid="email-field">{`Email: ${savedEmail}`}</h3>
          <h3 data-testid="total-field">{`Despesa Total: ${totalExpense}`}</h3>
          <h3 data-testid="header-currency-field">{currency}</h3>
        </header>
        <FormAddExpence />
      </div>
    );
  }
}

Wallet.propTypes = {
  savedEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  savedEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
