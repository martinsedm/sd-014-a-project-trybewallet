import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <section>
        <p data-testid="email-field">
          { email }
        </p>

        <p data-testid="total-field">
          { expenses }
        </p>

        <p data-testid="header-currency-field">
          BRL
        </p>
      </section>
    );
  }
}

// src: // src: https://github.com/tryber/sd-14a-live-lectures/tree/lecture/15.2Redux
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses.reduce((acc, curr) => {
    acc += curr.value * curr.exchangeRates[curr.currency].ask;
    return acc;
  }, 0),
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
