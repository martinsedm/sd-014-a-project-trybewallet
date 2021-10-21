import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/header.css';

class Header extends React.Component {
  totalExpenses() {
    const { expenses } = this.props;
    const some = expenses.reduce(
      (acc, el) => acc + Number(el.value * el.exchangeRates[el.currency].ask), 0,
    );
    return some;
  }

  render() {
    const { email } = this.props;
    return (
      <header className="containner-header">
        <img className="logo" src="/img/try.png" alt="logo trybe" />
        <div className="containner_user-infor">
          <p data-testid="email-field" className="email">{email}</p>
          <div className="conteinner-balance">
            <p data-testid="total-field">{`Despesa Total R$ ${this.totalExpenses()}`}</p>
            <p className="BRL" data-testid="header-currency-field">BRL</p>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
