import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HeaderWallet = (props) => {
  const { user } = props;
  return (
    <header>
      <p>
        Email:
        {' '}
        <span data-testid="email-field">{user.email}</span>
      </p>
      <p>
        Despesa Total:
        {' '}
        <span data-testid="total-field">{0}</span>
        {' '}
        <span data-testid="header-currency-field">BRL</span>
      </p>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user });

HeaderWallet.propTypes = {
  email: PropTypes.string,
  user: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, null)(HeaderWallet);
