import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, totalExpense } = this.props;
    return (
      <header data-testid="email-field">
        {`${userEmail}`}
        <h3 data-testid="total-field">
          { totalExpense || 0}
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet: { totalExpense } }) => ({
  userEmail: user.email,
  totalExpense,
});
export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
};
