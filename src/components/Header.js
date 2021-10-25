import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <div className="header-container">
        <span data-testid="email-field">{ emailUser }</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

export default connect(mapStateToProps)(Header);
