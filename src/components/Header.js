import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      expenses: 0,
    };
  }

  // expensesMath() {
  //   const { expenses } = this.state;
  //   const { globalState } = this.props;
  //   const { wallet } = globalState;
  //   console.log(wallet.expenses);
  //   console.log(expenses);
  // }

  render() {
    const { expenses } = this.state;
    const { email } = this.props;
    return (
      <div>
        <h2>Header</h2>
        {/* { this.expensesMath() } */}
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{expenses}</p>
        <p data-testid="header-currency-field">BRL</p>

      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
};

Header.defaultProps = {
  email: 'xablau@trybe.com',
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
