import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from './Input';
import Select from './Select';

class ExpensesForm extends React.Component {
  render() {
    const { currencies } = this.props;

    return (
      <form>
        <fieldset>
          <Input
            htmlFor="valor"
            label="Valor:"
            testid="valor-input"
            type="text"
            onChange={ this.handleChange }
          />
          <Input
            htmlFor="descricao"
            label="Descrição:"
            testid="descricao-input"
            type="text"
            onChange={ this.handleChange }
          />
          <Select
            htmlFor="currency"
            label="Moeda:"
            testid="currency"
            options={ currencies }
          />
          <Select
            htmlFor="payment"
            label="Método de pagamento:"
            testid="payment"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />
          <Select
            htmlFor="tag"
            label="Tag:"
            testid="tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
        </fieldset>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(ExpensesForm);
