import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormsComp from '../components/FormsComp';

class Wallet extends React.Component {
  render() {
    const { usedEmail, totalPrice } = this.props;
    return (
      <section>
        <header>
          <nav
            className="navbar navbar-expand-lg navbar-light bg-dark"
            style={ {
              justifyContent: 'space-between',
              color: 'white',
              width: '100%',
            } }
          >
            <div className="container">
              <div className="row ">
                <div className="col-xl" data-testid="email-field">
                  Email:
                  {usedEmail || 'Usuário não logado'}
                </div>
                <span>
                  Despesas:
                  <strong data-testid="total-field">{ totalPrice || 0 }</strong>
                </span>
                <div className="col-xl" data-testid="header-currency-field">
                  BRL
                </div>
              </div>
            </div>
          </nav>
          <NavLink to="/" className="float-right mr-3 mb-5">
            Logout
          </NavLink>
        </header>
        <FormsComp handleChange={ this.handleChange } />
      </section>
    );
  }
}

Wallet.propTypes = {
  usedEmail: PropTypes.string,
  totalPrice: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  usedEmail: state.user.email,
  totalPrice: state.wallet.total,
});

export default connect(mapStateToProps, null)(Wallet);
