import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.renderTotalValue = this.renderTotalValue.bind(this);
  }

  renderTotalValue() {
    const { totalValue } = this.props;
    const value = totalValue.reduce((acc, current) => {
      const BRLValue = (Number(current.value)
       * Number(current.exchangeRates[current.currency].ask));
      acc += BRLValue;
      return acc;
    }, 0);
    return value;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          {email}
        </p>
        <h4 data-testid="total-field">
          {this.renderTotalValue()}
        </h4>
        <p data-testid="header-currency-field"> BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalValue: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalValue: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
