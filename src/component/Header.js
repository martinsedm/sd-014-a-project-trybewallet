import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      sumExpenses: 0,
    };
  }

  render() {
    const { setEmailUser } = this.props;
    const { sumExpenses } = this.state;
    return (
      <header className="ctn-header">
        <div>
          <img alt="Trybe Wallet Logo" className="logo-trybe-wallet" />
        </div>
        <h3 data-testid="email-field">{ setEmailUser }</h3>
        <p
          className="total-field"
          data-testid="total-field"
        >
          Despesa Total:
          { sumExpenses }
        </p>
        <p
          className="header-currency-field"
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  setEmailUser: state.user.email,
});

Header.propTypes = {
  setEmailUser: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
