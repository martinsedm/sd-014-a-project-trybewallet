import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h4 data-testid="email-field">
          {email}
        </h4>
        {/* Provisório até criar estado */}
        <h4 data-testid="total-field"> 0</h4>
        {/* Provisório até criar estado */}
        <h4 data-testid="header-currency-field"> BRL</h4>
      </div>
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
