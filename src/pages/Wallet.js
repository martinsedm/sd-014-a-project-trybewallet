import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getAllCoinsFetchApi } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { setGetAllCoins } = this.props;
    setGetAllCoins();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setGetAllCoins: () => dispatch(getAllCoinsFetchApi()),
});

Wallet.propTypes = {
  setGetAllCoins: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
