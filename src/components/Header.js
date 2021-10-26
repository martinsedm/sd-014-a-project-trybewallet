import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email }, expenses } = this.props;
    return (// obtive ajuda do Leo Diber. Obrigado irmão;
      <header>
        <h3 data-testid="email-field">{ email }</h3>
        <h3 data-testid="total-field">
          { expenses.reduce((acc, crr) => {
            const usdValue = Math.round(Number(crr.value)
              * Number(crr.exchangeRates[crr.currency].ask) * 100) / 100;

            acc += usdValue;
            return acc;
          }, 0)}
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
