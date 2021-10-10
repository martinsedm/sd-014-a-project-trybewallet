import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="page">
        <div className="login">
          <h1>Trybewallet</h1>

          <input
            type="text"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
            className="form-control"
          />

        </div>
      </div>
    );
  }
}

export default Login;
