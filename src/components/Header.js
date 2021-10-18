import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user } = this.props;

    return (
      <header>
        <h2 data-testid="email-field">{ user.email }</h2>
        Despesa Total: R$
        <div data-testid="total-field">0</div>
        <h2 data-testid="header-currency-field">BRL</h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Header);
