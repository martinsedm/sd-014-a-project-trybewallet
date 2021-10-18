import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk, expenseConstructor } from '../actions/index';
import fetchAPI from '../services/awesomeapi';
import LabelInput from './LabelInput';
import Select from './Select';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      arr: [],
      exchangeRates: {},
    };
  }

  async componentDidMount() {
    await this.handleAPI();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAPI = async () => {
    const api = await fetchAPI();
    // retorno da API em arr sem USDT
    const arrAPI = Object.keys(api);
    const arrAPIfiltered = arrAPI.filter((curr) => curr[0] !== 'USDT');
    this.setState({ arr: arrAPIfiltered });
    // retorno da API em obj sem USDT
    delete api.USDT;
    this.setState({ exchangeRates: api });
  };

  handleClick = async (event) => {
    event.preventDefault();
    const { pushExpenses, handleTotal } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    const currState = { ...this.state };
    delete currState.arr;
    await pushExpenses(currState);
    // atualiza cotação chamando novamente a API
    await this.handleAPI();
    handleTotal();
  }

  render() {
    const { value, description, currency, method, tag, arr } = this.state;
    const optionMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const optionTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        <LabelInput
          att={ ['value', 'Valor', 'number', value, this.handleChange] }
        />
        <LabelInput
          att={ ['description', 'Descrição', 'text', description, this.handleChange] }
        />
        <Select
          att={ ['currency', currency, 'Moeda', this.handleChange] }
          option={ arr }
        />
        <Select
          att={ ['method', method, 'Método de pagamento', this.handleChange] }
          option={ optionMethod }
        />
        <Select
          att={ ['tag', tag, 'Tag', this.handleChange] }
          option={ optionTag }
        />
        <button type="submit" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  pushExpenses: PropTypes.func.isRequired,
  handleTotal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  pushExpenses: (payload) => dispatch(expenseConstructor(payload)),
});

export default connect(null, mapDispatchToProps)(Form);
