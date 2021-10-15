import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <header className="header">
        <p className="email header-item" data-testid="email-field">
          {email || 'Nenhum email'}
        </p>
        <div className="total-container header-item">
          <p className="total" data-testid="total-field">{total || 0}</p>
          <p className="currency header-item" data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    total: state.wallet.total,
  };
}

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
