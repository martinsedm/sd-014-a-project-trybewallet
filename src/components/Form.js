import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import Selects from './Selects';

class Form extends React.Component {
  render() {
    // https://github.com/tryber/sd-014-a-project-trybewallet/pull/5/commits/8f436c1d0bdd96c39f0c3f2d9c1ea9db0177cfa4
    // refencia ao Thiago, pois tive que refatorar por causa do lint limite de linhas no render.
    const {
      value,
      description,
      currency,
      currencies,
      pay,
      payment,
      category,
      categories,
      callback,
    } = this.props;
    return (
      <form>
        <fieldset>
          <h2>Adicione uma despesa</h2>
          <Inputs
            data={ ['Valor', 'value', value, 'number', callback] }
          />
          <Inputs
            data={ ['Descrição', 'description', description, 'text', callback] }
          />
          <Selects
            data={ ['Moeda', 'currency', currency, currencies, callback] }
          />
          <Selects
            data={ ['Método de pagamento', 'pay', pay, payment, callback] }
          />
          <Selects
            data={ ['Tag', 'category', category, categories, callback] }
          />
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  pay: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  payment: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  callback: PropTypes.func.isRequired,
};

export default Form;
