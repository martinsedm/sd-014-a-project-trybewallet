import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import store from './store';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      // currency: '',
      // total: 0,
    };
  }

  render() {
    const { login } = this.props;

    return (
      <section>
        <div data-testid="email-field">
          { login }
        </div>

        <div data-testid="total-field">
          Total!
        </div>

        <div data-testid="header-currency-field">
          Total!
        </div>
      </section>
    );
  }
}

Header.propTypes = {
  login: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    login: state.user.email,
  };
}

export default connect(mapStateToProps, null)(Header);
