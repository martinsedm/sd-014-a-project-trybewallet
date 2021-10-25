import PropTypes from 'prop-types';
import React from 'react';
import Select from './Select';

class Form extends React.Component {
  render() {
    const { info, saveUserInfo, saveFomrIfo } = this.props;
    return (
      <form>
        <label htmlFor="value-debito" onChange={ saveUserInfo }>
          Valor
          <input
            type="text"
            value={ info.value }
            name="value"
            id="value-debito"
          />
        </label>
        <label htmlFor="value-desc" onChange={ saveUserInfo }>
          Descrição
          <input
            type="text"
            value={ info.description }
            name="description"
            id="value-desc"
          />
        </label>
        <Select info={ info } saveUserInfo={ saveUserInfo } />
        <label htmlFor="value-payment-method" onChange={ saveUserInfo }>
          Método de pagamento
          <select
            id="value-payment-method"
            value={ info.method }
            name="method"
          >
            <option> Dinheiro </option>
            <option> Cartão de crédito </option>
            <option> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="value-type" onChange={ saveUserInfo }>
          Tag
          <select id="value-type" value={ info.tag } name="tag">
            <option> Alimentação </option>
            <option> Lazer </option>
            <option> Trabalho </option>
            <option> Transporte </option>
            <option> Saúde </option>
          </select>
        </label>
        <button type="button" onClick={ saveFomrIfo }> Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  info: PropTypes.shape({
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  saveFomrIfo: PropTypes.func.isRequired,
  saveUserInfo: PropTypes.func.isRequired,
};

export default Form;
