import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div><span data-testid="email-field">{ email }</span></div>
        <div><span data-testid="total-field">Total: 0</span></div>
        <div><span data-testid="header-currency-field">BRL</span></div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user: { email } }) => ({ email });

export default connect(mapStateToProps)(Header);
