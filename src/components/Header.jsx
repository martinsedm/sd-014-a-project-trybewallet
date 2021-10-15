import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email } } = this.props;
    const total = 0;
    const currency = 'BRL';
    return (
      <header>
        <label htmlFor="email-field">
          Email:
          <span name="email-field" data-testid="email-field">
            { email }
          </span>
        </label>
        <label htmlFor="total-field">
          Despesa total:
          <span name="total-field" data-testid="total-field">
            { total }
          </span>
          <span name="header-currency-field" data-testid="header-currency-field">
            { currency }
          </span>
        </label>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
