import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCoins from '../services/api';
import { saveExpenses } from '../actions';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: {},
    };
    this.handleCoins = this.handleCoins.bind(this);
  }

  componentDidMount() {
    this.handleCoins();
  }

  handleCoins() {
    getCoins().then((response) => {
      this.setState({ coins: response });
    });
  }

  render() {
    const { userEmail, expensesAct } = this.props;
    const { coins } = this.state;
    return (
      <div>
        <h1 data-testid="email-field">{ userEmail }</h1>
        <WalletForm
          expensesAct={ expensesAct }
          coins={ coins }
        />
        <h3 data-testid="header-currency-field">BRL</h3>
        <WalletTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  expensesAct: (expenses) => (
    dispatch(saveExpenses(expenses))),
});

Wallet.propTypes = {
  expensesAct: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
