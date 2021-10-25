import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    const INITIAL_TOTAL = 0;
    const CURRENCY = 'BRL';
    return (
      <div>
        <p data-testid="email-field">{ `Email: ${email}` }</p>
        <p data-testid="total-field">{ `Despesa total: ${INITIAL_TOTAL}` }</p>
        <p data-testid="header-currency-field">{ CURRENCY }</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
