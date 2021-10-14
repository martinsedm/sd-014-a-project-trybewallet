import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { email } = props.user;
    this.state = {
      email,
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email, total, currency } = this.state;
    return (
      <Header data={ { email, total, currency } } />
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Wallet);
