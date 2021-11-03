import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectedCurrency extends React.Component {
  constructor() {
    super();
    this.renderOptions = this.renderOptions.bind(this);
  }

  componentDidUpdate() {
    this.renderOptions();
  }
  // função para trazer o meu objetão como props. utilizar o object.keys para pegar somente as moedas.
  // filter para retirar as 2 moedas que não quero utilizar
  // meu retorno da função com um map no meu array gerado pelo object.keys. Criando option a cada iteração

  renderOptions() {
    const { currencyProps } = this.props;
    const currencyArray = Object.keys(currencyProps)
      .filter((currency) => currency !== 'USDT' && currency !== 'DOGE');
    return (
      currencyArray.map((curr, index) => <option key={ index }>{ curr }</option>));
  }

  render() {
    const { text, name, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <select
          name={ name }
          id={ name }
          onChange={ onChange }
        >
          { this.renderOptions() }
        </select>
      </label>
    );
  }
}

SelectedCurrency.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  currencyProps: PropTypes.objectOf.isRequired,
};

// trazendo do meu estado as informações das moedas e passando como props.
const mapStateToProps = (state) => ({
  currencyProps: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectedCurrency);
