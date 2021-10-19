import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, despesa, cambio } = this.props;
    return (
      <header>
        <div>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ despesa }</p>
          <p data-testid="header-currency-field">{ cambio }</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  cambio: PropTypes.string,
  despesa: PropTypes.string,
  email: PropTypes.string,
};

Header.defaultProps = {
  cambio: 'BRL',
  despesa: 0,
  email: 'Não informado',
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesa: state.wallet.despesa,
  cambio: state.wallet.cambio,
});

export default connect(mapStateToProps)(Header);
