import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disableBtn: true,
    };
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <p>as</p>
      </div>
    );
  }
}

export default LoginForm;
