import React from 'react';
// import { connect } from 'react-redux';
import FormAddDespesa from '../components/FormAddDespesa';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
// import chamarAPI from '../api/api';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     moedas: {},
  //   };
  // }

  render() {
    // const { moedas } = this.state;
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
