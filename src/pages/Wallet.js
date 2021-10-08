import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';
import Table from '../components/Table';
import FormEdit from '../components/FormEdit';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { editCondition, expense } = this.props;
    return (
      <>
        <Header />
        {editCondition ? <FormEdit expense={ expense } /> : <Form />}
        <Table />
      </>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  editCondition: PropTypes.bool.isRequired,
  expense: PropTypes.object.isRequired,
}.isRequired;

const mapStateToProps = (state) => ({
  editCondition: state.edit.editCondition,
  expense: state.edit.expense,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
