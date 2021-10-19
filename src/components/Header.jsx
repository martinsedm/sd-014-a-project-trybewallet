import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { getEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          Olá,
          { getEmail }
        </span>
        <span data-testid="total-field">
          Despesa Total: R$ 0
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);