import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, addExpensesThunk } from '../actions';

import ValueInput from './ValueInput';
import DescriptionInput from './DescriptionInput';
import CurrencySelect from './CurrencySelect';
import PaymentSelect from './PaymentSelect';
import TagSelect from './TagSelect';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { id } = this.state;
    const { addExpenses } = this.props;
    addExpenses(this.state);
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;

    return (
      <section>
        <form>
          <ValueInput
            value={ value }
            handleChange={ this.handleChange }
          />
          <DescriptionInput
            description={ description }
            handleChange={ this.handleChange }
          />
          <CurrencySelect
            currency={ currency }
            handleChange={ this.handleChange }
          />
          <PaymentSelect
            method={ method }
            handleChange={ this.handleChange }
          />
          <TagSelect
            tag={ tag }
            handleChange={ this.handleChange }
          />
          <button type="button" onClick={ this.handleClick }>
            Adicionar despesa
          </button>
        </form>
      </section>
    );
  }
}

ExpensesForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  addExpenses: (localState) => dispatch(addExpensesThunk(localState)),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);
