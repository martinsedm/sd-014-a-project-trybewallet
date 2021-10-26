import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormSelect from './FormSelect';
import FormInput from './FormInput';
import FormButton from './FormButton';
import { paymentOptions, tagOptions } from '../data';

class WalletForm extends React.Component {
  render() {
    const { expense: { value, description, currency, method, tag, editMode },
      currencies, handleChange, onClick } = this.props;
    return (
      <form>
        <FormInput
          id="value"
          value={ value }
          label="Valor"
          handleChange={ handleChange }
          type="number"
        />
        <FormInput
          id="description"
          value={ description }
          label="Descrição"
          handleChange={ handleChange }
          type="text"
        />
        <FormSelect
          id="currency"
          infoArray={ currencies }
          onChange={ handleChange }
          label="Moeda"
          value={ currency }
        />
        <FormSelect
          id="method"
          infoArray={ paymentOptions }
          onChange={ handleChange }
          label="Método de pagamento"
          value={ method }
        />
        <FormSelect
          id="tag"
          infoArray={ tagOptions }
          onChange={ handleChange }
          label="Tag"
          value={ tag }
        />
        <FormButton
          onClick={ onClick }
          label={ editMode ? 'Editar Despesa' : 'Adicionar despesa' }
          testid="add-btn"
        />
      </form>
    );
  }
}

WalletForm.propTypes = {
  expense: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    editMode: PropTypes.bool.isRequired,
  }).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
