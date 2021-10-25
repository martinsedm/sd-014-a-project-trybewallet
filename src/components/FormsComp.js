import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAPI from '../utils/getRatesAPI';
import { saveExpensesAtState as saveExpensesAction } from '../redux/actions';

class FormsComp extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.hdlChange = this.hdlChange.bind(this);
  }

  componentDidMount() {
    fetchAPI().then((exchangeRates) => this.setState({ exchangeRates }));
  }

  hdlChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { saveExpense } = this.props;
    saveExpense(this.state);
  }

  render() {
    const { value, currency, method, tag, description, exchangeRates } = this.state;
    const metodos = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <forms>
        <label htmlFor="value" className="form-group mr-3 ml-3">
          Valor
          <input name="value" id="value" value={ value } onChange={ this.hdlChange } />
        </label>
        <label htmlFor="currency" className="form-group mr-md-3">
          Moeda
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.hdlChange }
          >
            {Object.values(exchangeRates).map((coin, i) => {
              if (coin.codein !== 'BRLT' && coin.code !== 'DOGE') {
                return (<option key={ i }>{coin.code}</option>);
              }
            })}
          </select>
        </label>
        <label htmlFor="method" className="form-group mr-md-3">
          Método de pagamento
          <select name="method" id="method" onChange={ this.hdlChange } value={ method }>
            {metodos.map((met, i) => <option key={ i }>{met}</option>)}
          </select>
        </label>
        <label htmlFor="tag" className="form-group mr-md-3">
          Tag
          <select name="tag" id="tag" value={ tag } onChange={ this.hdlChange }>
            {tags.map((met, i) => <option key={ i }>{met}</option>)}
          </select>
        </label>
        <label htmlFor="description" className="form-group mr-3">
          Descrição
          <input
            name="description"
            id="description"
            value={ description }
            onChange={ this.hdlChange }
          />
        </label>
        <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
      </forms>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(saveExpensesAction(expense)),
});

export default connect(null, mapDispatchToProps)(FormsComp);

FormsComp.propTypes = {
  saveExpense: PropTypes.func.isRequired,
};
