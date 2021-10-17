import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends Component {
  render() {
    const { updatedTotal, userEmail } = this.props;

    return (
      <>
        <header>
          <div>
            LOGO
          </div>
          <div>
            <span data-testid="email-field">{ userEmail }</span>
            <span>
              Despesas:
              <strong data-testid="total-field">{ updatedTotal || 0 }</strong>
            </span>

            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
        <main>
          <Form handleChange={ this.handleChange } />
        </main>
      </>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  updatedTotal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({

  userEmail: state.user.email,
  updatedTotal: state.wallet.total,

});

export default connect(mapStateToProps, null)(Wallet);
