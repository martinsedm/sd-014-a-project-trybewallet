import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions/index';
import FormInputs from '../components/FormInputs';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencyApi } = this.props;
    currencyApi();
  }

  render() {
    // const { walletExpenses } = this.props;
    // const arrayExpenses = walletExpenses;
    // const resultMap = arrayExpenses.map((expense) => {
    //   (expense + (1 * value));
    //   return resultMap;
    // });
    return (
      <div>
        <h1>TrybeWallet</h1>
        <Header />
        <FormInputs />
      </div>
    );
  }
}

Wallet.propTypes = {
  currencyApi: PropTypes.func.isRequired,
  // walletExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

// const mapStateToProps = (state) => ({
//   walletExpenses: state.wallet.expenses,
// });

const mapDispatchToProps = (dispatch) => ({
  currencyApi: () => dispatch(fetchApi()),
});

export default connect(null, mapDispatchToProps)(Wallet);
