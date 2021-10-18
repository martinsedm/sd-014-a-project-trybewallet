import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <form>
          <span htmlFor="email" data-testid="email-field">
            Email:
            { email }
            <span data-testid="total-field">Despesa Total: R$ 0</span>
            <span data-testid="header-currency-field">BRL</span>
          </span>
        </form>
      </header>
    );
  }
}

const mapStatetoProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = ({
  email: PropTypes.string.isRequired,
});

export default connect(mapStatetoProps)(Header);
