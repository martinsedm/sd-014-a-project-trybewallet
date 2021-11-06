import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Exchange from './Exchange';
import Expenses from './Expenses';
import { getCurrenciesThunk } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      despesa: '',
      descrição: '',
      moeda: '',
      pagamento: '',
      despesas: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { setCurrentAPI } = this.props;
    setCurrentAPI();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { despesa, descrição, moeda, pagamento, despesas } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="despesa">
          Valor
          <input
            type="text"
            id="despesa"
            value={ despesa }
            name="despesa"
            onChange={ this.handleChange }
          />
        </label>
        <label
          htmlFor="descrição"
        >
          Descrição
          <input
            type="text"
            id="descrição"
            value={ descrição }
            name="descrição"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            type="text"
            id="moeda"
            value={ moeda }
            name="moeda"
            onChange={ this.handleChange }
          >

            {currencies.map((data, keys) => (
              <option key={ keys } value={ data }>{ data }</option>
            )) }

          </select>
        </label>
        <Exchange handleChange={ this.handleChange } value={ pagamento } />
        <Expenses handleChange={ this.handleChange } value={ despesas } />
      </form>

    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentAPI: () => dispatch(getCurrenciesThunk()),
});

Form.propTypes = {
  setCurrentAPI: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
