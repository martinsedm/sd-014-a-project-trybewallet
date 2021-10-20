import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Header from '../components/Header';
import { fetchApiMoedas as fetchApiMoedasThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApiMoedas } = this.props;
    fetchApiMoedas();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>

    );
  }
}

Wallet.propTypes = {
  fetchApiMoedas: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  fetchApiMoedas: (moeda) => dispatch(fetchApiMoedasThunk(moeda)),
});

export default connect(null, mapDispatchToProps)(Wallet);
