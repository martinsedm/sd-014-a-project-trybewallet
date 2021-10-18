import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import SelectPagamento from '../components/SelectPagamento';
import SelectCategoria from '../components/SelectCategoria';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { userEmail } = props;

    this.state = {
      valor: 0,
      despesa: '',
      categoria: '',
      pagamento: '',
      email: userEmail,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, despesa, categoria, pagamento, email } = this.state;
    return (
      <div>
        <h2>TrybeWallet</h2>
        <header>
          <h4 data-testid="email-field">{ email }</h4>
          <h4 data-testid="total-field">Total de gastos</h4>
          <h4 data-testid="header-currency-field">Moeda corrente</h4>
        </header>
        <div>
          <form name="valor">
            <label htmlFor="valor">
              Valor
              <input
                type="number"
                id="valor"
                name="valor"
                value={ valor }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="despesa">
              Descr. despesa:
              <input
                type="text"
                id="despesa"
                name="despesa"
                value={ despesa }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="moeda">
              Moeda:
              {/* <select>
            </select> */}
            </label>
            <SelectPagamento value={ pagamento } handleChange={ this.handleChange } />
            <SelectCategoria value={ categoria } handleChange={ this.handleChange } />
          </form>
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({

  emailUser: state.user.email,

});

export default connect(mapStateToProps)(Wallet);
