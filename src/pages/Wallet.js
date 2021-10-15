import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAPI } from '../actions';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencyAPI } = this.props;
    currencyAPI();
  }

  render() {
    return (
      <>
        <Header />
        <Expenses />
      </>
    );
  }
}

Wallet.propTypes = {
  currencyAPI: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  currencyAPI: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);
