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
  // expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

// const mapStateToProps = ({
//   wallet: { expenses } }) => ({ expenses });

const mapDispatchToProps = (dispatch) => ({
  currencyApi: (moeda) => dispatch(fetchApi(moeda)),
});

export default connect(null, mapDispatchToProps)(Wallet);
