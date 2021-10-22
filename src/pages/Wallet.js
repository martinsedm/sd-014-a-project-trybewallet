import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    const valorInicial = 0;
    const selectedCurrency = 'BRL';
    return (
      <main>
        <h2 data-testid="email-field">{email}</h2>
        <h3 data-testid="total-field">{`Despesa total Gerada: R$ ${valorInicial}`}</h3>
        <h3
          data-testid="header-currency-field"
        >
          {`Cambio selecionado: ${selectedCurrency}`}
        </h3>
        <br />
        <Form />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
