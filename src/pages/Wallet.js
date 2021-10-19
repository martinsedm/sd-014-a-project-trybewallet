import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import { updateWallet } from '../actions';
import getCoins from '../services/getCoins';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.saveDataWallet = this.saveDataWallet.bind(this);

    this.state = {
      id: 0,
      valor: '',
      descricao: '',
      currency: 'USD',
      metodoPagamento: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: { },
    };
  }

  componentDidMount() {
    this.coins();
  }

  onChange(event) {
    const { name, value } = event.target;
    if (name === 'Descrição') {
      return this.setState({
        descricao: value,
      });
    }
    if (name === 'Método de Pagamento') {
      return this.setState({
        metodoPagamento: value,
      });
    }
    this.setState({
      [name]: value,
    });
  }

  async coins() {
    const allCoins = await getCoins();
    this.setState({ exchangeRates: allCoins });
  }

  async saveDataWallet() {
    const { dispatchToProps } = this.props;
    const { id } = this.state;
    const exchangeRates = await getCoins();
    this.setState({ exchangeRates });
    dispatchToProps(this.state);
    this.setState({ id: id + 1 });
  }

  render() {
    const { valor, descricao, currency,
      metodoPagamento, categoria, exchangeRates } = this.state;
    const listCoins = Object.keys(exchangeRates);
    return (
      <div>
        <Header moeda={ currency } valor={ valor } exchangeRates={ exchangeRates } />
        <form>
          <Input nome="valor" tipo="tel" value={ valor } onChange={ this.onChange } />
          <Input
            nome="Descrição"
            tipo="text"
            role="textbox"
            value={ descricao }
            onChange={ this.onChange }
          />
          <label htmlFor="moeda">
            Moeda:
            { }
            <select name="currency" id="moeda" onChange={ this.onChange }>
              {(listCoins.map((coin) => (
                (coin !== 'USDT') && (
                  <option key={ coin } value={ coin }>
                    { coin }
                  </option>))))}
            </select>
          </label>
          <Select
            nome="Método de Pagamento"
            value={ metodoPagamento }
            onChange={ this.onChange }
          />
          <Select nome="tag" value={ categoria } onChange={ this.onChange } />
          <button
            type="button"
            disabled={ valor === '' }
            onClick={ this.saveDataWallet }
            name="Adicionar despesa"
          >
            Adicionar despesa
          </button>
        </form>
      </div>);
  }
}

Wallet.propTypes = {
  dispatchToProps: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchToProps: (state) => dispatch(updateWallet(state)),
});

export default connect(null, mapDispatchToProps)(Wallet);
