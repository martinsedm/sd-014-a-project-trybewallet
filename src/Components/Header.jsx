import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      totalField: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { totalField, cambio } = this.state;
    return (
      <nav>
        <div>
          Email:
          <p data-testid="email-field">{ email }</p>
        </div>
        <div>
          Despesa Total:
          <p data-testid="total-field">{ totalField }</p>
        </div>
        <div>
          Câmbio:
          <p data-testid="header-currency-field">{ cambio }</p>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps, null)(Header);
