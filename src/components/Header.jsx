import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const formatPrice = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {' '}
          {email}
        </p>
        <span data-testid="total-field">
          {' '}
          Total gasto:
          {' '}
          {formatPrice(0)}
        </span>
        <span data-testid="header-currency-field">
          {' '}
          BRL
        </span>
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
