import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MethodInput extends Component {
  render() {
    const { methodOptions, method, handleChange } = this.props;

    console.log(methodOptions);

    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method" name="method" value={ method } onChange={ handleChange }>
          <option value="" disabled hidden> Método de pagamento</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
        </select>
      </label>
    );
  }
}

MethodInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  methodOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  method: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  methodOptions: state.user.method,
});

export default connect(mapStateToProps, null)(MethodInput);
