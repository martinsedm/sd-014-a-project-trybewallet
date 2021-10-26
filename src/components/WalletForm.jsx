import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from './Select';
import fetchAPI from '../services/API';
import { expenseAdd } from '../actions/index';
import { Tag, Method } from '../services/Type';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      option: [],
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    await this.handleFetch();
  }

  async handleFetch() {
    const api = await fetchAPI();
    delete api.USDT;
    const arrAPI = Object.entries(api);
    const arrAPIMapped = arrAPI.map((curr) => curr[0]);
    this.setState({ option: arrAPIMapped });
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
    delete currState.option;
    await this.handleFetch();
    await pushExpenses(currState);
    handleTotal();
  }

  render() {
    const { value, description, currency, method, tag, option } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
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
          Descrição:
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
          option={ option }
        />
        <Select
          att={ ['method', method, 'Método de pagamento', this.handleChange] }
          option={ Method }
        />
        <Select
          att={ ['tag', tag, 'Tag', this.handleChange] }
          option={ Tag }
        />
        <button type="submit" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  pushExpenses: PropTypes.func.isRequired,
  handleTotal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  pushExpenses: (payload) => dispatch(expenseAdd(payload)),
});

export default connect(null, mapDispatchToProps)(WalletForm);
