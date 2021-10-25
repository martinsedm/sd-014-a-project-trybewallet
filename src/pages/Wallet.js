import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AddDesp from '../components/AddDesp';
import Header from '../components/Header';
import AddTabelaGastos from '../components/AddTabelaGastos';
import { getApiMoneyThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getAllCoins } = this.props;
    getAllCoins();
  }

  render() {
    return (
      <div>
        <Header />
        <AddDesp />
        <AddTabelaGastos />
      </div>
    );
  }
}

Wallet.propTypes = {
  getAllCoins: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getAllCoins: () => dispatch(getApiMoneyThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
