import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormsInput from '../components/FormsInput';
import FormsSelect from '../components/FormsSelect';
import fetchCoins from '../actions/addCurrencies';

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    return (
      <>
        <Header />
        <FormsInput />
        <FormsSelect currencies={ currencies } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGot: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
