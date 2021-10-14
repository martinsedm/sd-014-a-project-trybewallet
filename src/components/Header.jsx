import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div data-testid="email-field">
        <span>Email:</span>
        {email}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,

});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
