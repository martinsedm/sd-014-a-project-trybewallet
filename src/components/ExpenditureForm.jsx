import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenditureForm extends React.Component {
  render() {
    const { coins } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            placeholder="Valor"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descrição"
          />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            {coins.map(({ code }) => <option key={ code }>{code}</option>)}
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select name="paymentMethod" id="paymentMethod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
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

const mapStateToProps = ({ wallet }) => ({
  coins: wallet.currencies,
});

ExpenditureForm.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenditureForm);
