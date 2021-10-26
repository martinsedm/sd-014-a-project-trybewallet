import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from './Select';
import fetchAPI from '../services/APIntegrator';
import { expenseConstructor } from '../actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USA',
      method: 'Dinheiro',
      tag: 'Alimentação',
      opArr: [],
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAPI = this.handleAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    this.setState({ exchangeRates: api });
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  async handleClick(event) {
    event.preventDefault();
    const { pushExpenses, handleTotal } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    const currState = { ...this.state };
    delete currState.opArr;
    await this.handleAPI();
    await pushExpenses(currState);
    handleTotal();
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
  pushExpenses: (payload) => dispatch(expenseConstructor(payload)),
});

export default connect(null, mapDispatchToProps)(Form);
