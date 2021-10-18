import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.renderSelect = this.renderSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchCoins = this.fetchCoins.bind(this);

    this.state = {
      moeda: [],
      pagamento: '',
      despesa: '',
      valor: '',
      descricao: '',
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  async fetchCoins() {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const responseJson = await response.json();
      const coins = Object.keys(responseJson);
      const coinsFiltered = coins.filter((item) => (
        item !== 'USDT'
      ));
      this.setState({ moeda: coinsFiltered });
    } catch (error) {
      console.error(error);
    }
  }

  renderSelect() {
    const { moeda, pagamento, despesa } = this.state;
    return (
      <div>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            onChange={ this.handleChange }
          >
            {moeda.map((item) => (
              <option key={ item } value={ item }>{item}</option>
            ))}
          </select>
        </label>
        <label htmlFor="método-pagamento">
          Método de pagamento:
          <select
            htmlFor="pagamento"
            id="método-pagamento"
            onChange={ this.handleChange }
          >
            <option value="dinheiro" id="pagamento">Dinheiro</option>
            <option value="credito" id="pagamento">Cartão de crédito</option>
            <option value="debito" id="pagamento">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-despesa">
          Tag:
          <select
            htmlFor="despesa"
            id="tag-despesa"
            onChange={ this.handleChange }
          >
            <option value="alimentação" id="despesa">
              Alimentação
            </option>
            <option value="lazer" id="despesa">Lazer</option>
            <option value="trabalho" id="despesa">Trabalho</option>
            <option value="transporte" id="despesa">Transporte</option>
            <option value="saúde" id="despesa">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { valor, descricao } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            name="valor"
            value={ valor }
            id="valor"
            onChange={ this.handleChange }
          />
        </label>
        {this.renderSelect()}
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="descricao"
            value={ descricao }
            id="descricao"
            onChange={ this.handleChange }
          />
        </label>

      </form>
    );
  }
}

export default Form;
