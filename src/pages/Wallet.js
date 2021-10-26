import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { api, adicionarGastos } from '../actions';
import Input from '../components/Input';
import Method from '../components/Method';
import Tags from '../components/Tag';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleclick = this.handleclick.bind(this);
  }

  componentDidMount() {
    const { responseApi } = this.props;
    responseApi();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleclick(e) {
    const { gastos } = this.props;
    e.preventDefault();
    const resposta = await fetch('https://economia.awesomeapi.com.br/json/all');
    const respostaApi = await resposta.json();
    delete respostaApi.USDT;
    this.setState({ exchangeRates: respostaApi });
    gastos(this.state);
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, description, method, tag } = this.state;
    return (
      <div>
        <Header />
        <form>
          <Input
            inputGerado={ ['text', 'value', 'valor', value, this.handleChange, 'Valor'] }
          />
          <Input
            inputGerado={
              ['text', 'description', 'desc', description, this.handleChange, 'Descrição']
            }
          />
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { Object
                .keys(currencies)
                .map((moeda) => (
                  <option key={ moeda }>
                    { moeda }
                  </option>)) }
            </select>
          </label>
          <Method metodo={ ['method', method, this.handleChange] } />
          <Tags tags={ ['tag', tag, this.handleChange] } />
          <button type="submit" onClick={ this.handleclick }> Adicionar despesa </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  responseApi: () => dispatch(api()),
  gastos: (state) => dispatch(adicionarGastos(state)),
});

Wallet.propTypes = {
  responseApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  gastos: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
