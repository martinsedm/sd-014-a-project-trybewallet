import React from 'react';
import { connect } from 'react-redux';
import FormExpense from '../Components/FormExpense';
import Header from '../Components/Header';
import Table from '../Components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpense />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
