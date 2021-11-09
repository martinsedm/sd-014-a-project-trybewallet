import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, wallet } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { user.email }
        </p>
        <p data-testid="total-field">
          { `Total: 0 ${wallet.total}` }
        </p>
        <p data-testid="header-currency-field"> BRL </p>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired, // wallet: PropTypes.objectOf(PropTypes.any).isRequired,
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  user,
  wallet,
});

export default connect(mapStateToProps, null)(Header);
