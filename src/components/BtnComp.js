import React, { Component } from 'react';

export default class BtnComp extends Component {
  render() {
    return (
      <aside className="float-right mt-3 mr-5">
        <button
          id="btnGO"
          type="submit"
          onClick={ this.handleLogin }
          className="btn btn-danger btn-lg"
        >
          Adicionar Despesa
        </button>
      </aside>
    );
  }
}
