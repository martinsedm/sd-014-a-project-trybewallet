import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { store: { user, wallet } } = this.props;
    return (
      <main>
        <header>
          <div>Wallet</div>
          <div>
            <h3 data-testid="email-field">{user.email}</h3>
            <h3 data-testid="total-field">
              Despesa Total:
              {' '}
              {wallet.expenses.length === 0 && 0 }
            </h3>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
        <Form />
      </main>
    );
  }
}

Wallet.propTypes = {
  store: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(Wallet);
