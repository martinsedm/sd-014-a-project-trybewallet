import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormsInput from '../components/FormsInput';
import FormsSelect from '../components/FormsSelect';

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <Header />
        <FormsInput />
        <FormsSelect />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGot: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
