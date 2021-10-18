import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getcoins } = this.props;
    getcoins();
  }

  render() {
    return (
      <main>
        <Header />
        <ExpenseForm />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    getcoins: () => dispatch(fetchAPI()),
  });

Wallet.propTypes = {
  getcoins: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
