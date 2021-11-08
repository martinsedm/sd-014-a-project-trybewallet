import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk, setExpenseThunk } from '../actions';

import Exchange from './Exchange';
import Expenses from './Expenses';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      despesa: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
      descrição: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { setCurrentExpense } = this.props;
    setCurrentExpense(this.state);
  }

  render() {
    const { despesa, moeda, tag, descrição, pagamento } = this.state;
    return (
      <form>
        <Exchange
          despesa={ despesa }
          moeda={ moeda }
          pagamento={ pagamento }
          handleChange={ this.handleChange }
        />
        <Expenses
          tag={ tag }
          descrição={ descrição }
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentAPI: () => dispatch(getCurrenciesThunk()),
  setCurrentExpense: (expense) => dispatch(setExpenseThunk(expense)),
});

Form.propTypes = {
  setCurrentExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
