import React from 'react';
import { NavLink } from 'react-router-dom';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <NavLink to="/" activeClassName="selected">
          FAQs
        </NavLink>
      </>
    );
  }
}

export default Wallet;
