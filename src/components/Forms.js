/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Method from './Method';
import SelectTag from './SelectTag';
import { addExpenses, buscaMoeda } from '../actions';
import BtnAdicionar from './BtnAdicionar';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'DINHEIRO',
      tag: 'ALIMENTACAO',
      exchangeRates: {},
      id: -1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(name) {
    this.setState({ [name.target.name]: name.target.value });
  }

  async handleClick(event) {
    event.preventDefault();
    const { addDespesas, moedasApi } = this.props;
    await moedasApi();
    const { coins } = this.props;
    await this.setState((prev) => ({
      exchangeRates: coins,
      id: prev.id + 1,
    }));
    await addDespesas(this.state);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    // if (currencies.length === 0) return <p>Carregando..</p>;

    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              value={ value }
              name="value"
              onChange={ this.handleChange }
              id="value"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              value={ description }
              name="description"
              onChange={ this.handleChange }
              id="description"
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              type="text"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
              id="currency"
            >
              { currencies.map((curr) => (
                <option key={ curr }>{ curr }</option>
              )) }
            </select>
          </label>
          <Method value={ method } onChange={ this.handleChange } />
          <SelectTag value={ tag } onChange={ this.handleChange } />
          <BtnAdicionar onChange={ this.handleClick } />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  coins: state.wallet.coins,
});

const mapDispatchToProps = (dispatch) => ({
  addDespesas: (expenses) => dispatch(addExpenses(expenses)),
  moedasApi: () => dispatch(buscaMoeda()),
});

Forms.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  addDespesas: PropTypes.func.isRequired,
  coins: PropTypes.objectOf(PropTypes.object).isRequired,
  moedasApi: PropTypes.func.isRequired,
};
Forms.defaultProps = { currencies: '' };

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
