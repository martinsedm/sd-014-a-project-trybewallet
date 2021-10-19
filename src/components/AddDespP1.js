import React from 'react';

class AddDespP1 extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
    };
    this.handleC = this.handleC.bind(this);
  }

  //   const responseJsonl26 = [Object.values(responseJson)];

  handleC({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description } = this.state;
    console.log(this.state);
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="valor"
            id="valor"
            value={ value }
            onChange={ this.handleC }
          />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input
            type="text"
            name="descricao"
            id="descrição"
            value={ description }
            onChange={ this.handleC }
          />
        </label>
      </div>
    );
  }
}

export default AddDespP1;
