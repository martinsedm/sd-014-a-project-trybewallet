import React, { Component } from 'react';

export default class DescriptionComp extends Component {
  constructor() {
    super();
    this.props = {
      description: '',
    };
  }

  handleChange(event) {
    const description = this.state;
    this.setState({
      [description]: event.target.value,
    });
  }

  render() {
    const description = this.state;
    return (
      <label htmlFor="desc" className="form-group mr-3">
        Descrição:
        <input
          type="text"
          id="desc"
          value={ description }
          className="form-control mr-md-3"
        />
      </label>
    );
  }
}
