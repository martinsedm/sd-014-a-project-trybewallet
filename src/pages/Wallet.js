import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../component/Form';
import Header from '../component/Header';
import { fetchCur } from '../actions/index';
import Table from '../component/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>

    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCur()),
});

export default connect(null, mapDispatchToProps)(Wallet);
