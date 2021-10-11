import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <h1 className="text-success">Trybewallet</h1>

        <div className="infos-container">
          <p data-testid="email-field">{`Email: ${email}`}</p>

          <p data-testid="total-field">
            Despesa Total: R$ 0,00
            {' '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
