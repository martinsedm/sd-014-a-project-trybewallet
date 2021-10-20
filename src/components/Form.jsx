import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { moedas } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="moeda">
            <option>
              { moedas }
            </option>
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select id="metodo" name="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  moedas: PropTypes.string.isRequired,
};

export default Form;
