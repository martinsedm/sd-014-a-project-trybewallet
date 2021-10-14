import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valeuTotal: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { valeuTotal } = this.state;
    return (
      <>
        <h1 data-testid="email-field">
          { email }
        </h1>
        <input type="text" data-testid="total-field" value={ valeuTotal } name="total" />
        <fieldset>
          <select data-testid="header-currency-field">
            <option> BRL </option>
          </select>
        </fieldset>
      </>
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
