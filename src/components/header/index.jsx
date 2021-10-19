import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
    };
  }

  render() {
    const { balance } = this.state;
    const { email } = this.props;
    return (
      <header className="containner-header">
        <img className="logo" src="/img/try.png" alt="logo trybe" />
        <div className="containner_user-infor">
          <p data-testid="email-field" className="email">{email}</p>
          <div className="conteinner-balance">
            <p data-testid="total-field">{`Despeza Total R$ ${balance}`}</p>
            <p className="BRL" data-testid="header-currency-field">BRL</p>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
