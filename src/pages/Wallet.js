import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchApi from '../components/FetchApi';
import FormInputs from '../components/FormInputs';
import Header from '../components/Header';

class Wallet extends React.Component {
  // componentDidMount() {
  //   const { currencyApi } = this.props;
  //   currencyApi();
  // }

  render() {
    // const { expenses } = this.props;
    return (
      <>
        <h1>TrybeWallet</h1>
        <Header />
        <FormInputs />
      </>
    );
  }
}

// Wallet.propTypes = {
//   currencyApi: PropTypes.func.isRequired,
//   // expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
// };

// const mapStateToProps = ({
//   wallet: { expenses } }) => ({ expenses });

// const mapDispatchToProps = (dispatch) => ({
//   currencyApi: dispatch(fetchApi()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
export default Wallet;
