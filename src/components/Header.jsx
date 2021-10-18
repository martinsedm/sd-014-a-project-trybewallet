import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailUser } = this.props;
    return (
      <div>
        <h2>TrybeWallet</h2>
        <header>
          <h4 data-testid="email-field">{ emailUser }</h4>
          <h4>
            Total das despesas:
            <span data-testid="total-field">0</span>
          </h4>
          <h4>
            Moeda corrente:
            <span data-testid="header-currency-field">BRL</span>
          </h4>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({

  emailUser: state.user.email,

});

export default connect(mapStateToProps)(Header);
