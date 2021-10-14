import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <Header userEmail={ userEmail } />
        <main>
          asfdasfsaf
        </main>
      </div>);
  }
}

const mapStateToProps = ({ user }) => ({
  userEmail: user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
