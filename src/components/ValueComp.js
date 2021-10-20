import React, { Component } from 'react';

export default class ValueComp extends Component {
  constructor() {
    super();
    this.props = {
      value: 0,
    };
  }

  handleChange(event) {
    const value = this.state;
    this.setState({
      [value]: event.target.value,
    });
  }

  render() {
    const value = this.state;
    return (
      <label htmlFor="valor" className="form-group mr-3 ml-3">
        Valor:
        <input type="text" id="valor" value={ value } className="form-control  btn" />
      </label>
    );
  }
}
