import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.genericHandler = this.genericHandler.bind(this);
    this.genericTester = this.genericTester.bind(this);
    this.formChecker = this.formChecker.bind(this);
  }

  genericHandler({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  genericTester(template, subject) {
    return template.test(subject);
  }

  formChecker() {
    const { password, email } = this.state;
    const MIN_PASS_LENGTH = 6;
    // const emailTemplate = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; --- Too long, but found it here: https://www.codegrepper.com/code-examples/javascript/check+if+valid+email+js
    const emailTemplate = /\S+@\S+\.\S+/;
    if (password.length >= MIN_PASS_LENGTH && this.genericTester(emailTemplate, email)) {
      return true;
    }
    return false;
  }

  render() {
    const submitReady = this.formChecker();
    return (
      <div>
        Login
        <form>
          <input
            placeholder="Email"
            data-testid="email-input"
            type="email"
            onChange={ this.genericHandler }
            name="email"
            required
          />
          <br />
          <input
            placeholder="Senha"
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.genericHandler }
            required
          />
          <br />
          <button type="submit" disabled={ !submitReady }>Entrar</button>

        </form>
      </div>
    );
  }
}

export default Login;

// https://www.w3schools.com/jsref/jsref_regexp_test.asp --- JS  test()  syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions --- regex for the email validation
