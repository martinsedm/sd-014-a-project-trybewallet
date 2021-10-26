import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertToBRL } from '../services/awesomeAPI';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, cur) => acc + convertToBRL(cur), 0);
    const CURRENCY = 'BRL';
    return (
      <div>
        <p data-testid="email-field">{ `Email: ${email}` }</p>
        <p data-testid="total-field">{ `Despesa total: ${total}` }</p>
        <p data-testid="header-currency-field">{ CURRENCY }</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  email: 'user@mail.com',
  expenses: [{}],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
