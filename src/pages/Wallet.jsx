import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form.jsx';

class Wallet extends React.Component {
  render() {
    const { loginEmail } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          {loginEmail || 'Usuário não logado'}
        </header>
        <section data-testid="total-field">
          0
        </section>
        <section data-testid="header-currency-field">
          BRL
        </section>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
