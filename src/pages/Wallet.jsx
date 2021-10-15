import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      currency: '',
      method: '',
      tag: '',
      description: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick() {
    console.log('click');
  }

  render() {
    const { userEmail } = this.props;

    return (
      <>
        <header>
          <div>
            LOGO
          </div>
          <div>
            <span data-testid="email-field">{ userEmail }</span>
            <span data-testid="total-field">Despesas: 0</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
        <main>
          <Form handleChange={ this.handleChange } />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
