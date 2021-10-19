import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    // const { emailUser, totWalletUpdate } = this.props;
    const { emailUser } = this.props;
    return (
      <header>
        <p
          data-testid="email-field"
        >
          {`O e-mail informado foi: ${emailUser}` }

        </p>
        <span>
          Despesa total:
          {/* <p data-testid="total-field">{`R$ ${totWalletUpdate || 0}`}</p> */}
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </span>

      </header>
    );
  }
}

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
  // totWalletUpdate: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  totWalletUpdate: state.wallet.total,
});
// const mapDispatchToProps = () => ({});
// const mapDispatchToProps = (dispatch) => ({
// });

export default connect(mapStateToProps, null)(Header);
