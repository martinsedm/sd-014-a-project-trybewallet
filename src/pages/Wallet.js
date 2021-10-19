import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'TrybeWallet-Wallet';
  }

  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return <div>TrybeWallet</div>;
  }
}

function mapStateToProps(state) {
  return ({
    currencies: state.wallet.currencies,
    expenses: state.wallet.expenses,
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchCurrencies: () => dispatch(fetchCurrencies()),
  });
}

Wallet.propTypes = ({
  currencies: PropTypes.arrayOf(PropTypes.object),
  expenses: PropTypes.arrayOf(PropTypes.object),
  dispatchCurrencies: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
