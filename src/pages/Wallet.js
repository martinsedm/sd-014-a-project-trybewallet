import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, fetchAPIExpenses } from '../actions';
import Select from '../components/Select';
import Table from '../components/Table';
import Header from '../components/Header';

const PAYMENT = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const ALIMENTAÇÃO = 'Alimentação';
const TAG_TYPE = [ALIMENTAÇÃO, 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descrição: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: ALIMENTAÇÃO,
    };
    this.handleClick = this.handleClick.bind(this);
    this.inputValueAndDescription = this.inputValueAndDescription.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { currencyAPI } = this.props;
    currencyAPI();
  }

  handleClick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addExpense() {
    const { expenseAPI } = this.props;
    expenseAPI(this.state);
    this.setState({
      valor: '',
      descrição: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: ALIMENTAÇÃO,
    });
  }

  inputValueAndDescription() {
    const { valor, descrição } = this.state;
    return (
      <>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="valor"
            id="valor"
            value={ valor }
            onChange={ this.handleClick }
          />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input
            type="text"
            name="descrição"
            id="descrição"
            value={ descrição }
            onChange={ this.handleClick }
          />
        </label>
      </>
    );
  }

  render() {
    const { currency } = this.props;
    const { moeda, pagamento, tag } = this.state;
    const COIN_TREATED = Object.keys(currency).filter((coin) => coin !== 'USDT');
    return (
      <div>
        <Header />
        <form>
          {this.inputValueAndDescription()}
          <Select
            id="moeda"
            name="moeda"
            handleClick={ this.handleClick }
            value={ moeda }
            arry={ COIN_TREATED }
            labelName="Moeda:"
          />
          <Select
            id="pagamento"
            name="pagamento"
            handleClick={ this.handleClick }
            value={ pagamento }
            arry={ PAYMENT }
            labelName="Método de pagamento:"
          />
          <Select
            id="tag"
            name="tag"
            handleClick={ this.handleClick }
            value={ tag }
            arry={ TAG_TYPE }
            labelName="Tag:"
          />
          <input
            type="button"
            value="Adicionar Despesa"
            onClick={ () => this.addExpense() }
          />
        </form>
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  currencyAPI: PropTypes.func.isRequired,
  currency: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenseAPI: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencyAPI: () => dispatch(fetchAPI()),
  expenseAPI: (state) => dispatch(fetchAPIExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
