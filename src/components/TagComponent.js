import React, { Component } from 'react';

export default class TagComponent extends Component {
  constructor() {
    super();
    this.props = {
      tag: '',
    };
  }

  handleChange(event) {
    const { tag } = this.state;
    this.setState({
      [tag]: event.target.value,
    });
  }

  render() {
    const tag = this.state;
    return (
      <label htmlFor="tag" className="form-group mr-md-3">
        Tag:
        <select
          id="tag"
          value={ tag }
          className="form-control  btn"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}
