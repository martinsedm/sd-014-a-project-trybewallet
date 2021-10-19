import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import SelectPagamento from '../components/SelectPagamento';
import SelectCategoria from '../components/SelectCategoria';
import Formulario from '../components/Formulario';
import Header from '../components/Header';
import { getApiAction, getExpenseApiAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      method: '',
      currency: '',
      tag: '',
      id: -1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { getAllApi } = this.props;
    const { value, description, method, currency, tag, id } = this.state;
    const newId = id + 1;
    this.setState({
      id: newId,
    });

    getAllApi({ value, description, method, currency, tag, id: newId });
  }

  render() {
    const { value, description, method, currency, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <form name="valor">
          <Formulario
            valor={ value }
            despesa={ description }
            handleChange={ this.handleChange }
          />
          <label htmlFor="moeda">
            Moeda
            <select
              id="moeda"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map((curr, index) => (
                <option key={ index } value={ curr }>{curr}</option>
              ))}
            </select>
          </label>
          <SelectPagamento value={ method } handleChange={ this.handleChange } />
          <SelectCategoria value={ tag } handleChange={ this.handleChange } />
        </form>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getAllApi: PropTypes.func.isRequired,
  getApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({

  getApi: () => dispatch(getApiAction()),
  getAllApi: (expense) => dispatch(getExpenseApiAction(expense)),

});

const mapStateToProps = (state) => ({

  currencies: state.wallet.currencies,

});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
