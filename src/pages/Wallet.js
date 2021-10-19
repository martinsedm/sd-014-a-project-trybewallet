import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormsComp from '../components/FormsComp';

class Wallet extends React.Component {
  render() {
    const { usedEmail } = this.props;
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
                <div className="col-xl" data-testid="total-field">
                  Despesa total: 0
                </div>
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
        <FormsComp />
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  usedEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  usedEmail: PropTypes.string,
}.isRequired;
