import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const valor = 0;
    const coin = 'BRL:';
    const { email } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">
          Seu Email:
          { email }
        </h1>
        <h1 data-testid="total-field">
          Despesa:
          { valor }
        </h1>
        <h1 data-testid="header-currency-field">
          Cambio:
          { coin }
        </h1>

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
