import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchAPI } from '../actions';
import FormDespesa from '../components/FormDespesa';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
    };

    this.updateValues = this.updateValues.bind(this);
  }

  componentDidMount() {
    const { loadCurr } = this.props;
    loadCurr();
  }

  updateValues() {

  }

  render() {
    const { values } = this.props;
    return (
      <section>
        <Header total={ values } />
        <FormDespesa />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadCurr: (data) => dispatch(fetchAPI(data)),
});

const mapStateToProps = (state) => ({
  values: state.wallet.expenses.reduce((acc, curr) => {
    acc += curr.value * curr.exchangeRates[curr.currency].ask;
    return acc;
  }, 0),
});

Wallet.propTypes = {
  loadCurr: propTypes.func.isRequired,
  values: propTypes.arrayOf(propTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
