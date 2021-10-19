import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { estadoEmail } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          {estadoEmail}
        </h3>
        <h3 data-testid="total-field"> 0,00</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

Header.propTypes = {
  estadoEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  estadoEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
