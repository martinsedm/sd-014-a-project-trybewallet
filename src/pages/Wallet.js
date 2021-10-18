import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Input from '../components/Input';
import { getAllCoinsFetchApi } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { setGetAllCoins } = this.props;
    setGetAllCoins();
  }

  render() {
    return (
      <div>
        <Header />
        <Input />
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
