import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <div>
        <span>
          Gastos:
          <span data-testid="total-field">
            { Math.round(total * 100) / 100 }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </span>
        <section data-testid="email-field">{ email }</section>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps)(Header);
