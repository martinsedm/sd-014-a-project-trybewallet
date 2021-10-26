import React, { Component } from 'react';
import Select from './Select';
import fetchAPI from '../services/APIntegrator';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USA',
      method: 'Dinheiro',
      tag: 'Alimentação',
      opArr: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAPI = this.handleAPI.bind(this);
  }

  async componentDidMount() {
    await this.handleAPI();
  }

  async handleAPI() {
    const api = await fetchAPI();
    delete api.USDT;
    const arrAPI = Object.entries(api);
    const arrAPIMapped = arrAPI.map((curr) => curr[0]);
    this.setState({ opArr: arrAPIMapped });
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag, opArr } = this.state;
    const opMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const opTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            value={ value }
            id="value"
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            alue={ description }
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <Select
          att={ ['currency', currency, 'Moeda', this.handleChange] }
          option={ opArr }
        />
        <Select
          att={ ['method', method, 'Método de pagamento', this.handleChange] }
          option={ opMethod }
        />
        <Select
          att={ ['tag', tag, 'Tag', this.handleChange] }
          option={ opTag }
        />
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default Form;
