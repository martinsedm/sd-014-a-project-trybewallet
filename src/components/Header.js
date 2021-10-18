import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { getUserFromStore, getCurrencie } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { getUserFromStore }
        </p>

        <p data-testid="total-field">0</p>

        <p data-testid="header-currency-field">
          { getCurrencie }
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getUserFromStore: state.user.email,
  getTotalExpense: state.wallet.expenses,
  getCurrencie: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  getUserFromStore: PropTypes.string.isRequired,
  getCurrencie: PropTypes.string.isRequired,
};
