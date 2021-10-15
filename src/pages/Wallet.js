import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import { categories, payment } from '../data/index';

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
        pay: '',
        category: '',
        currencies: [],
        categories,
        payment,
      },
    };
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange({ target: { name, value } }) {
    const { form } = this.state;
    console.log(name, value);
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
      <main>
        <Header data={ { email, total, currency } } />
        <section>
          <Form { ...form } callback={ this.handlechange } />
        </section>
      </main>
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
