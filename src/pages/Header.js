import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ user.email }</p>
        <p data-testid="total-field">0</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Header);
