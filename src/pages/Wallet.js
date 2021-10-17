import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAPI } from '../actions';
import Expenses from '../components/Expenses';
import Loading from '../components/Loading';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencyAPI } = this.props;
    currencyAPI();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <>
        <Header />
        { isLoading ? <Loading /> : <Expenses /> }
      </>
    );
  }
}

Wallet.propTypes = {
  currencyAPI: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  currencyAPI: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
