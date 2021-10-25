import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <Header />
        <form
          onSubmit={ (e) => {
            e.preventDefault();
          } }
        >
          <Input
            htmlFor="value"
            text="Valor"
            value={ value }
            handleChange={ this.handleChange }
            type="number"
          />
          <Input
            htmlFor="description"
            text="Descrição"
            value={ description }
            handleChange={ this.handleChange }
          />
          <Select
            htmlFor="currency"
            text="Moeda"
          />
        </form>
      </div>
    );
  }
}

export default Wallet;
