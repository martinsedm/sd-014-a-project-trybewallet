import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          <span>
            { email }
          </span>
        </div>
        <div data-testid="total-field">
          <span>
            0
          </span>
        </div>
        <div data-testid="header-currency-field">
          <span>
            BRL
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
