import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { email } = props.user;
    this.state = {
      email,
      total: 0,
      currency: 'BRL',
      form: {
        value: 0,
        description: '',
        currency: '',
        currencies: [],
        pay: '',
        category: '',
        categories: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
        payment: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    });
  }

  render() {
    const { email, total, currency, form } = this.state;
    return (
      <div>
        <Header data={ { email, total, currency } } />
        <div>
          <Form { ...form } callback={ this.handleChange } />
        </div>
      </div>
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
