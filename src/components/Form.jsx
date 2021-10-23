import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './subComponents/Input';
import { getCurrenciesActionThunk } from '../actions';
import SelectCurrency from './subComponents/SelectCurrency';
import SelectMethod from './subComponents/SelectMethod';
import SelectTag from './subComponents/SelectTag';

class Form extends Component {
  constructor(props) {
    super(props);
    // const { currencies } = this.props;
    this.state = {
      // currencies,
      value: 0,
      description: '',
      // selectedCurrency: 'USD',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>
        <Input text="Valor" name="valor" type="number" value={ value } />
        <Input text="Descrição" name="descrição" type="text" value={ description } />
        <SelectCurrency text="Moeda" name="moeda" />
        <SelectMethod text="Método de pagamento" name="method" />
        <SelectTag text="Tag" name="tag" />
      </form>
    );
  }
}

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesActionThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
