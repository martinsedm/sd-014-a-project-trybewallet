import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: '',
    }

    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: this.props.email,
    });
    
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{ email }</h3>
        <h3 data-testid="total-field"> 0 </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.userReducer.user.email,
});

export default connect(mapStateToProps)(Wallet);
