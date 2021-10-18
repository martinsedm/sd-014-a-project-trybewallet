import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserEmail } from '../actions';
import { FormsLogin } from '../components/FormsLogin';

class Login extends React.Component {
  render() {
    const { setEmail } = this.props;
    return (
      <FormsLogin setEmail={ setEmail } />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (payload) => dispatch(setUserEmail(payload)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
