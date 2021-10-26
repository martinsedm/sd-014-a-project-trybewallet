import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, FormGroup, Form } from 'reactstrap';
import { getExpenses as getExpensesAction } from '../actions';
import currencyAPI from '../services/currencyAPI';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import {
  valueInput,
  descriptionInput,
  methods,
  tags,
  currencyInput,
  methodInput,
  tagInput } from '../data';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleSelectInput = this.handleSelectInput.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { getExpenses } = this.props;
    const exchangeRates = await currencyAPI();
    this.setState({ exchangeRates });
    getExpenses(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  }

  handleTextInput({ label, type, name }, value, onChange) {
    return (<TextInput
      label={ label }
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
    />);
  }

  handleSelectInput({ label, name }, value, options, onChange) {
    return (<SelectInput
      label={ label }
      name={ name }
      value={ value }
      options={ options }
      onChange={ onChange }
    />);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <Form onSubmit={ this.handleSubmit } inline className="expenses-form">
        <Container className="expensesInput">
          <FormGroup>
            { this.handleTextInput(valueInput, value, this.handleChange)}
          </FormGroup>
          <FormGroup>
            { this.handleTextInput(descriptionInput, description, this.handleChange) }
          </FormGroup>
          <FormGroup>
            { this.handleSelectInput(
              currencyInput, currency, currencies, this.handleChange,
            ) }
          </FormGroup>
          <FormGroup>
            { this.handleSelectInput(
              methodInput, method, methods, this.handleChange,
            ) }
          </FormGroup>
          <FormGroup>
            { this.handleSelectInput(
              tagInput, tag, tags, this.handleChange,
            ) }
          </FormGroup>
          <Button type="submit" className="expenseBtn" color="primary" size="sm">
            Adicionar despesa
          </Button>
        </Container>
      </Form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({ currencies });

const mapDispatchToProps = (dispatch) => ({
  getExpenses: (expenses) => dispatch(getExpensesAction(expenses)),
});

Expenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
