import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getValueThunk } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="describe">
          Descrição:
          <input type="text" name="describe" id="describe" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency">
            {currencies.map((currencie) => (
              <option key={ currencie } value={ currencie }>{ currencie }</option>))}
            ;
          </select>
        </label>

        <label htmlFor="pag">
          Método de pagamento:
          <select name="pag" id="pag">
            <option value="">Dinheiro</option>
            <option value="">Cartão de débito</option>
            <option value="">Cartão de crédito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="">Alimentação</option>
            <option value="">Lazer</option>
            <option value="">Trabalho</option>
            <option value="">Transporte</option>
            <option value="">Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });
const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getValueThunk()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
