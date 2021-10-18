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
    const { globalState } = this.props;
    const { user } = globalState;
    return (
      <div>
        <h2>Header</h2>
        {/* { this.expensesMath() } */}
        <p data-testid="email-field">{user.email}</p>
        <p data-testid="total-field">{expenses}</p>
        <p data-testid="header-currency-field">BRL</p>

      </div>
    );
  }
}

Header.propTypes = {
  globalState: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
    wallet: PropTypes.shape({}),
  }).isRequired,
};

// como aprendi a ler somente o estado da store para pegar o user.email
// https://www.youtube.com/watch?v=u99tNt3TZf8&t=1803s
export default connect((state) => ({ globalState: state }))(Header);
