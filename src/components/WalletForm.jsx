import React from 'react';
import PropTypes from 'prop-types';
import WalletInput from './WalletInput';
import WalletSelect from './WalletSelect';

// const currencyOption = (code) => (
//   <option
//     key={ code }
//     value={ code }
//   >
//     { code }
//   </option>
// );

// const paymentOptions = (
//   <>
//     <option name="method" value="Dinheiro">Dinheiro</option>
//     <option name="method" value="Cartão de crédito">Cartão de crédito</option>
//     <option name="method" value="Cartão de débito">Cartão de débito</option>
//   </>
// );
// <label htmlFor="value">
//           Valor
//           <input
//             type="number"
//             onChange={ handleChange }
//             name="value"
//             value={ selected.value }
//           />
//         </label>
//         <label htmlFor="description">
//           Descrição
//           <input
//             type="text"
//             onChange={ handleChange }
//             name="description"
//             value={ selected.description }
//           />
//         </label>
//         <label htmlFor="currency-select">
//           Moeda
//           <select
//             id="currency-select"
//             onChange={ handleChange }
//             name="currency"
//             value={ selected.currency }
//           >
//             { currenciesCodes.map((code) => (
//               currencyOption(code)))}
//           </select>
//         </label>
//         <label htmlFor="payment-method-select">
//           Método de pagamento
//           <select
//             id="payment-method-select"
//             onChange={ handleChange }
//             name="method"
//             value={ selected.method }
//           >
//             { paymentOptions }
//           </select>
//         </label>
//         <label htmlFor="tag-select">
//           Tag
//           <select
//             id="payment-methos-select"
//             onChange={ handleChange }
//             name="tag"
//             value={ selected.tag }
//           >
//             { tagOptions }
//           </select>
//         </label>
// const tagOptions = (
//   <>
//     <option value="feeding">Alimentação</option>
//     <option value="leasure">Lazer</option>
//     <option value="work">Trabalho</option>
//     <option value="transport">Transporte</option>
//     <option value="health">Saúde</option>
//   </>
// );

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletForm extends React.Component {
  render() {
    const { currenciesCodes, handleChange, handleSubmit, selected } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <WalletInput
          name="value"
          type="number"
          labelText="Valor"
          value={ selected.value }
          onChange={ handleChange }
        />
        <WalletSelect
          name="currency"
          labelText="Moeda"
          options={ currenciesCodes }
          value={ selected.currency }
          onChange={ handleChange }
        />
        <WalletSelect
          name="method"
          labelText="Método de pagamento"
          options={ methods }
          value={ selected.method }
          onChange={ handleChange }
        />
        <WalletSelect
          name="tag"
          labelText="Tag"
          options={ tags }
          value={ selected.tag }
          onChange={ handleChange }
        />
        <WalletInput
          name="description"
          labelText="Descrição"
          value={ selected.description }
          onChange={ handleChange }
        />
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currenciesCodes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default WalletForm;
