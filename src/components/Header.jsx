import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    const { email } = this.props;
    this.state = {
      email,
      despesa: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { email, despesa, cambio } = this.state;
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
  email: PropTypes.string,
};

Header.defaultProps = {
  email: 'Não informado',
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
