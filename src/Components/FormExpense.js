import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendCurrencyThunk } from '../actions';
import SelectedCurrency from './SelectedCurrency';
import SelectedMethod from './SelectedMethod';
import SelectedTag from './SelectedTag';
import Textos from './Textos';

class FormExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      value: 0,
      method: 'Dinheiro',
      currency: 'BRL',
    };
  }

  componentDidMount() {
    const { dispatchCurrency } = this.props;
    dispatchCurrency();
  }

  render() {
    const { value, description, currency, method } = this.state;
    return (
      <form>
        <Textos
          text="Valor"
          name="value"
          type="number"
          value={ value }
          onChange={ this.handleChange }
        />
        <Textos
          text="Descrição"
          name="description"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectedCurrency
          text="Moeda"
          name="moeda"
          value={ currency }
          // onChange={ this.handleCurrencySelect }
        />
        <SelectedMethod
          name="método de pagamento"
          value={ method }
          // onChange={ this.handleMethod }
        />
        <SelectedTag name="tag" onChange={ this.handleChange } />
        <button type="submit" onClick={ this.handleClick }>
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrency: () => dispatch(sendCurrencyThunk()),
});
const mapStateToProps = (state) => ({
  currencyProps: state.wallet.currencies,
});

FormExpense.propTypes = {
  dispatchCurrency: PropTypes.objectOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
