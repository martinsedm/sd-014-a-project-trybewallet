import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h4 data-testid="email-field">{ email }</h4>
        <span data-testid="total-field">0</span>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Header);
