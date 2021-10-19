import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <header>
        <p
          data-testid="email-field"
        >
          { email }
        </p>
        <p
          data-testid="total-field"
        >
          0
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default Header;
