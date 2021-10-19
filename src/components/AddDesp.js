import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Loading from './loading';

import { getApiMoneyThunk } from '../actions';

class AddDesp extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.handleC = this.handleC.bind(this);
  }

  componentDidMount() {
    const { getApiMoney } = this.props;
    getApiMoney();
  }

  //   const responseJsonl26 = [Object.values(responseJson)];

  handleC(e) {
    this.setState = ({ valor: e.target.value });
  }

  render() {
    const { loading } = this.state;
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        {loading ? (
          <form>
            <label htmlFor="valor">
              Valor:
              <input type="text" name="valor" id="valor" onChange={ this.handleC } />
            </label>
            <label htmlFor="descrição">
              Descrição:
              <input type="text" name="Descrição" id="descrição" />
            </label>
            <label htmlFor="moeda">
              Moeda:
              <select>
                {/* {currencies.map((item, index) => (
                  <option key={ index } value={ item }>{item}</option>
                ))} */}
              </select>
            </label>
            <label htmlFor="mpagamento">
              Método de pagamento:
              <select type="text" name="mpagamento" id="mpagamento">
                <option>Dinheiro</option>
                <option>Cartão de crédito</option>
                <option>Cartão de débito</option>
              </select>
            </label>
            <label htmlFor="tag">
              Tag:
              <select type="text" name="tag" id="tag">
                <option>Alimentação</option>
                <option>Lazer</option>
                <option>Trabalho</option>
                <option>Transporte</option>
                <option>Saúde</option>
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
