import React from 'react';
import { connect } from 'react-redux';
import FormAddDespesa from '../components/FormAddDespesa';
// import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <FormAddDespesa />
      </main>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   selectUser: (email) => dispatch(selectUserAction(email)),
// });

export default Wallet;
