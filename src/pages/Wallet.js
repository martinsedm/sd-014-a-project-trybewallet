import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  render() {
    const { total } = this.state;
    const { loginEmail } = this.props;
    return (
      <main>
        <section>
          <header data-testid="email-field">
            {!loginEmail ? 'Usuário não logado' : loginEmail}
          </header>
          <div data-testid="total-field">
            {total}
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </section>
        <Form />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
});

Wallet.propTypes = {
  loginEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
