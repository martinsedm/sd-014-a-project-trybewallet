import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label>
          Valor
          <input type="text" />
        </label>
        <label>
          Descrição
          <input type="text" />
        </label>
        <label>
          Moeda
          <select name="" id=""></select>
        </label>
        <label>
          Método de Pagamento
          <select name="" id=""></select>
        </label>
        <label>
          Tag
          <select name="" id=""></select>
        </label>
      </form>
    );
  }
}
