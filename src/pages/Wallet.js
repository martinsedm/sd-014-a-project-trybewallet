import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0,
      currency: 'BRL',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { savedEmail } = this.props;
    const { totalExpense, currency } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <h3 data-testid="email-field">{ savedEmail }</h3>
          <Input
            type="number"
            name="totalExpense"
            testId="total-field"
            value={ totalExpense }
            onChange={ this.handleChange }
          />
          <Input
            type="text"
            name="currency"
            testId="header-currency-field"
            value={ currency }
            onChange={ this.handleChange }
          />

        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  savedEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  savedEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
