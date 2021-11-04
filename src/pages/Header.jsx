import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailInfo } = this.props;
    return (
      <>
        <h5
          data-testid="email-field"
        >
          { emailInfo }
        </h5>
        <h5
          data-testid="total-field"
        >
          0
        </h5>
        <h5
          data-testid="header-currency-field"
        >
          BRL
        </h5>
      </>
    );
  }
}

Header.propTypes = {
  emailInfo: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => (
  {
    emailInfo: state.user.email,
  }
);

export default connect(mapStateToProps, null)(Header);
