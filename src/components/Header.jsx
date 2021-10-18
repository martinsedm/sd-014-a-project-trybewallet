import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div>Trybe</div>
        <div data-testid="email-field"><span>{email}</span></div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
});
export default connect(mapStateToProps)(Header);
