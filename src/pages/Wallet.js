import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApiRedux } from '../actions';
import Header from '../components/Header';

import Form from '../components/Form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.fetchApi = this.fetchApi.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.saveFomrIfo = this.saveFomrIfo.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  saveUserInfo({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async fetchApi() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const requestApi = await fetch(url);
    const response = await requestApi.json();
    const coins = Object.values(response).splice(1);
    this.setState({
      coins,
    });
  }

  saveFomrIfo() {
    const {
      value, description, currency, method, tag } = this.state;
    const { fomrInfo } = this.props;
    fomrInfo({ value, description, currency, tag, method });
  }

  render() {
    const { coins } = this.state;
    console.log(coins);
    return (
      <>
        <Header />
        <Form
          info={ this.state }
          saveUserInfo={ this.saveUserInfo }
          saveFomrIfo={ this.saveFomrIfo }
        />
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fomrInfo: (payload) => dispatch(fetchApiRedux(payload)),
});

Wallet.propTypes = {
  fomrInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
