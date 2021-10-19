import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addExpense as addExpenseAction,
  finishEdit as finishEditAction } from '../actions';
import Header from '../components/Header';
import getCurrencyRate from '../services/currencyAPI';
import InputText from '../components/InputText';
import Table from '../components/Table';
import SubmitForm from '../components/SubmitForm';
import InputSelect from '../components/InputSelect';

const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderCurrencyCodes = this.renderCurrencyCodes.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.renderEditForm = this.renderEditForm.bind(this);
  }

  componentDidMount() {
    this.resultAPI();
  }

  async resultAPI() {
    const resultAPI = await getCurrencyRate();
    this.setState({
      exchangeRates: resultAPI,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { addExpense } = this.props;
    const { id } = this.state;
    const exchangeRates = await getCurrencyRate();
    this.setState({ exchangeRates });
    addExpense(this.state);
    this.setState({ value: '', description: '', id: (id + 1) });
  }

  handleEditClick() {
    const { finishEdit } = this.props;
    finishEdit(this.state);
  }

  renderEditForm() {
    const { expenseBeingEdited, finishEdit } = this.props;
    // const { id, value, description, currency, method, tag, exchangeRates } = expenseBeingEdited[0];
    console.log(expenseBeingEdited[0]);
    finishEdit(this.state);
    this.setState({ value: 2 });
  }

  renderCurrencyCodes() {
    const CURRENCY_CODE_LENGTH = 3;
    const { exchangeRates } = this.state;
    const initialsCodes = Object.keys(exchangeRates)
      .filter((code) => code.length === CURRENCY_CODE_LENGTH);
    return initialsCodes.map((code) => (<option key={ code }>{code}</option>));
  }

  renderMethod() {
    return payments.map((paymentList) => (
      <option key={ paymentList }>{paymentList}</option>));
  }

  renderTags() {
    return tags.map((tagList) => <option key={ tagList }>{tagList}</option>);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { handleChange, handleClick,
      handleEditClick, renderCurrencyCodes, renderMethod, renderTags } = this;
    const { isEditing } = this.props;
    return (
      <div>
        <Header />
        <form>
          <InputText
            label="Valor:"
            name="value"
            value={ value }
            handleChange={ handleChange }
          />
          <InputText
            label="Descrição:"
            name="description"
            value={ description }
            handleChange={ handleChange }
          />
          <InputSelect
            label="Moeda:"
            name="currency"
            value={ currency }
            handleChange={ handleChange }
            data={ renderCurrencyCodes }
          />
          <InputSelect
            label="Método de pagamento:"
            name="method"
            value={ method }
            handleChange={ handleChange }
            data={ renderMethod }
          />
          <InputSelect
            label="Tag:"
            name="tag"
            value={ tag }
            handleChange={ handleChange }
            data={ renderTags }
          />
          {isEditing
            ? <SubmitForm handleClick={ handleEditClick } text="Editar despesa" />
            : <SubmitForm handleClick={ handleClick } text="Adicionar despesa" />}
        </form>
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  expenseBeingEdited: PropTypes.objectOf(PropTypes.any).isRequired,
  finishEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isEditing: state.wallet.isEditing,
  expenseBeingEdited: state.wallet.expenseBeingEdited,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
  finishEdit: (expense) => dispatch(finishEditAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
