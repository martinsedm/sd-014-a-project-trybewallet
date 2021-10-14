import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header data-testid="email-field">
        {`${userEmail}`}
        <h3 data-testid="total-field">0</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}
Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
