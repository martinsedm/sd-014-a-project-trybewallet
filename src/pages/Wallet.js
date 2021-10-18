import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';
import { getAllCoinsThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getAllCoins } = this.props;
    getAllCoins();
  }

  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllCoins: () => dispatch(getAllCoinsThunk()),
});

Wallet.propTypes = {
  getAllCoins: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
