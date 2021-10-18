import React from 'react';

import SelectPagamento from '../components/SelectPagamento';
import SelectCategoria from '../components/SelectCategoria';
import Formulario from '../components/Formulario';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 0,
      despesa: '',
      categoria: '',
      pagamento: '',
      // currencies: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, despesa, categoria, pagamento } = this.state;
    return (
      <div>
        <Header />

        <form name="valor">
          <Formulario
            valor={ valor }
            despesa={ despesa }
            handleChange={ this.handleChange }
          />
          <label htmlFor="moeda">
            Moeda:
            {/* <select>
            </select> */}
          </label>
          <SelectPagamento value={ pagamento } handleChange={ this.handleChange } />
          <SelectCategoria value={ categoria } handleChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

export default Wallet;
