import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { total, currency } = this.state;
    return (
      <section>
        <div data-testid="email-field">
          <span>Email:</span>
          {email}
        </div>
        <div data-testid="total-field">
          <span>Total:</span>
          {total}
        </div>
        <div data-testid="header-currency-field">
          <span>Currency:</span>
          {currency}
        </div>

      </section>
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
