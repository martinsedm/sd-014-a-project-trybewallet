import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { total: 0 };
    this.convertion = this.convertion.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    if (prevProps.expenses !== expenses) this.convertion();
  }

  convertion() {
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
    const { estadoInicial } = this.props;
    const { total } = this.state;
    return (
      <header>
        <h3 data-testid="email-field">{estadoInicial}</h3>
        <h3 data-testid="total-field">
          { total }
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}
Header.propTypes = {
  estadoInicial: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  estadoInicial: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
