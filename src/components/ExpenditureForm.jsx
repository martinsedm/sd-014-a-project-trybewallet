import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectInput from './SelectInput';
import { setExpenditure, fetchCoins } from '../actions';

class ExpenditureForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  submit(event) {
    event.preventDefault();
    const { setExpenditureGlobal, getCoins } = this.props;
    getCoins().then(() => setExpenditureGlobal(this.state));
  }

  render() {
    const { coins } = this.props;
    return (
      <form onSubmit={ this.submit }>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            placeholder="Valor"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            placeholder="Descrição"
            onChange={ this.handleChange }
          />
        </label>
        <SelectInput
          id="currency"
          label="Moeda"
          options={ Object.keys(coins) }
          onChange={ this.handleChange }
        />
        <SelectInput
          id="method"
          label="Método de pagamento"
          onChange={ this.handleChange }
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <SelectInput
          id="tag"
          label="Tag"
          onChange={ this.handleChange }
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
        <input type="submit" value="Adicionar despesa" />
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  coins: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenditureGlobal: (expenditure) => dispatch(setExpenditure(expenditure)),
  getCoins: () => dispatch(fetchCoins()),
});

ExpenditureForm.propTypes = {
  coins: PropTypes.objectOf(PropTypes.any).isRequired,
  setExpenditureGlobal: PropTypes.func.isRequired,
  getCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenditureForm);
