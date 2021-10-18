import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import FormEdit from '../components/FormEdit';
import Header from '../components/Header';
import Tabela from '../components/Tabela';

class Wallet extends Component {
  render() {
    const { editing } = this.props;
    return (
      <main>
        carteira
        <Header />
        {editing ? <FormEdit /> : <Form /> }
        <Tabela />
      </main>
    );
  }
}

Wallet.propTypes = {
  editing: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  editing: state.edit.editing,
  idxEdit: state.edit.idxEdit,
});

export default connect(mapStateToProps, null)(Wallet);
