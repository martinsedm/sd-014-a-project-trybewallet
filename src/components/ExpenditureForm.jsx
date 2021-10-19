import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectInput from './SelectInput';
import {
  setExpenditure as setExpenditureAction,
  editExpenditure as editExpenditureAction } from '../actions';

const INITIAL_FORM = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class ExpenditureForm extends React.Component {
  constructor() {
    super();
    this.state = {
      forms: INITIAL_FORM,
      isEditing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
  }

  static getDerivedStateFromProps(nextProps, state) {
    const { isEditing, curExpenditure } = nextProps;
    if (isEditing && isEditing !== state.isEditing) {
      return {
        forms: curExpenditure,
        isEditing,
      };
    } if (!isEditing && isEditing !== state.isEditing) {
      return {
        forms: INITIAL_FORM,
        isEditing,
      };
    }
    return null;
  }

  handleChange({ target: { id, value } }) {
    this.setState((prev) => ({ forms: { ...prev.forms, [id]: value } }));
  }

  async submit(event) {
    event.preventDefault();
    const { setExpenditure, editExpenditure } = this.props;
    const { forms, isEditing } = this.state;
    if (isEditing) return editExpenditure(forms);
    setExpenditure(forms);
    this.setState({ forms: INITIAL_FORM });
  }

  renderInputs() {
    const { forms: { value, description } } = this.state;
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            value={ value }
            placeholder="Valor"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            value={ description }
            placeholder="Descrição"
            onChange={ this.handleChange }
          />
        </label>
      </>
    );
  }

  renderSelect() {
    const { coins } = this.props;
    const { forms: { currency, method, tag } } = this.state;
    return (
      <>
        <SelectInput
          id="currency"
          label="Moeda"
          value={ currency }
          options={ coins }
          onChange={ this.handleChange }
        />
        <SelectInput
          id="method"
          label="Método de pagamento"
          value={ method }
          onChange={ this.handleChange }
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        />
        <SelectInput
          id="tag"
          label="Tag"
          value={ tag }
          onChange={ this.handleChange }
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />
      </>
    );
  }

  renderSubmitButton() {
    const { isEditing } = this.state;
    if (!isEditing) return (<input type="submit" value="Adicionar despesa" />);
    return (<input type="submit" value="Editar despesa" />);
  }

  render() {
    return (
      <form onSubmit={ this.submit }>
        {this.renderInputs()}
        {this.renderSelect()}
        {this.renderSubmitButton()}
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  coins: wallet.currencies,
  isEditing: wallet.isEditing,
  curExpenditure: wallet.curExpenditure,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenditure: (expenditure) => dispatch(setExpenditureAction(expenditure)),
  editExpenditure: (expenditure) => dispatch(editExpenditureAction(expenditure)),
});

ExpenditureForm.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  isEditing: PropTypes.bool,
  curExpenditure: PropTypes.objectOf(PropTypes.any),
  setExpenditure: PropTypes.func.isRequired,
  editExpenditure: PropTypes.func.isRequired,
};

ExpenditureForm.defaultProps = {
  isEditing: false,
  curExpenditure: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenditureForm);
