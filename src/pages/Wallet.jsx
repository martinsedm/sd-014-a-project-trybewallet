import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Select from '../components/Select';
import requestFetch from '../services/requestAPI';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    const callApi = await requestFetch();
    const removeUSDT = callApi.filter((coins) => coins !== 'USDT');
    this.setState({ coins: removeUSDT });
  }

  render() {
    const { email } = this.props;
    const { coins } = this.state;
    return (
      <div>
        <header>
          TrybeWallet
          <h2 data-testid="email-field">{email}</h2>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form>
          <Input nomeLabel="Valor" />
          <Input nomeLabel="Descrição" />
          <Select id="moeda" nomeLabel="Moeda" options={ coins } />
          <Select
            id="metodoPag"
            nomeLabel="Método de pagamento"
            options={ ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'] }
          />
          <Select
            id="tag"
            nomeLabel="Tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
        </form>

      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  // wallet: state.wallet.empty,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  // wallet: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
