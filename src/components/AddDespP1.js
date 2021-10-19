import React from 'react';

class AddDespP1 extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
    };
    this.handleCh = this.handleCh.bind(this);
  }

  //   const responseJsonl26 = [Object.values(responseJson)];

  handleCh({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description } = this.state;
    console.log(this.state);
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleCh }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleCh }
          />
        </label>
      </div>
    );
  }
}

export default AddDespP1;
