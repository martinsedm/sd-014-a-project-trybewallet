import React from 'react';
import { connect } from 'react-redux';
import FormExpense from '../Components/FormExpense';
import Header from '../Components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpense />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
