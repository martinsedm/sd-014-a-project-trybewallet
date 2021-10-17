import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, moeda } = this.props;

    return (
      <header>
        <div data-testid="email-field">
          {' '}
          { email }
        </div>
        <div data-testid="total-field">
          {0}
        </div>
        <div data-testid="header-currency-field">
          Câmbio:
          {' '}
          { moeda }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  moeda: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
