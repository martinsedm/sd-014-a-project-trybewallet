import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Header({ user }) {
  return (
    <header>
      <h1>Cabeçalho</h1>
      <div>
        <p data-testid="email-field">{user}</p>
        {/* change to span tag when styling */}
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
