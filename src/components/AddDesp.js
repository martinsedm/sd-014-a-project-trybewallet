import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Loading from './loading';
import AddDespP1 from './AddDespP1';

import { getApiMoneyThunk } from '../actions';

class AddDesp extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      currency: '',
      method: '',
      tag: '',
    };
    this.handleC = this.handleC.bind(this);
  }

  componentDidMount() {
    const { getApiMoney } = this.props;
    getApiMoney();
  }

  //   const responseJsonl26 = [Object.values(responseJson)];

  handleC({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { loading, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const arrayOptTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const arrayOptPag = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    console.log(loading, currency, method, tag);
    console.log(this.state);
    return (
      <div>
        {loading ? (
          <form>
            <AddDespP1 />
            <label htmlFor="currency">
              Moeda:
              <select name="currency" id="currency">
                {currencies.map((item, index) => (
                  <option key={ index } value={ item }>{item}</option>
                ))}
              </select>
            </label>
            <label htmlFor="method">
              Método de pagamento:
              <select id="method" name="method">
                {arrayOptPag.map((i) => (<option key={ i } value={ i }>{i}</option>))}
              </select>
            </label>
            <label htmlFor="tag">
              Tag:
              <select name="tag" id="tag">
                {arrayOptTag.map((i) => (<option key={ i } value={ i }>{i}</option>))}
              </select>
            </label>
            <button type="button" id="button" name="button">Adicionar despesa</button>
          </form>
        ) : <Loading />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApiMoney: () => dispatch(getApiMoneyThunk()),
});

AddDesp.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
  getApiMoney: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDesp);
