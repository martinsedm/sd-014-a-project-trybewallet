import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>TrybeWalltet</h1>
        <h3 data-testid="email-field">
          Usuário:&nbsp;
          { email }
        </h3>
        <h3 data-testid="total-field">
          Total das despesas: 0
          <span data-testid="header-currency-field"> BRL </span>
        </h3>
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
