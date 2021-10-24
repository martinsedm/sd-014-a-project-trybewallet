import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    if (prevProps.expenses !== expenses) {
      this.calculateTotal();
    }
  }

  calculateTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, valor) => {
      acc += valor.value * valor.exchangeRates[valor.currency].ask;
      return acc;
    }, 0);
    this.setState({
      total,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { total } = this.state;
    return (
      <div>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <p>
          Total de Despesas:
          <span data-testid="total-field">
            {total}
          </span>
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
