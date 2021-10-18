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
      method,
      payment,
      tag,
      categories,
      onChange,
      onClick,
    } = this.props;
    return (
      <form>
        <fieldset>
          <h2>Adicione uma despesa</h2>
          <Inputs
            data={ ['Valor', 'value', value, 'number', onChange] }
          />
          <Inputs
            data={ ['Descrição', 'description', description, 'text', onChange] }
          />
          <Selects
            data={ ['Moeda', 'currency', currency, currencies, onChange] }
          />
          <Selects
            data={ ['Método de pagamento', 'method', method, payment, onChange] }
          />
          <Selects
            data={ ['Tag', 'tag', tag, categories, onChange] }
          />
          <button
            type="button"
            onClick={ onClick }
          >
            Adicionar Despesa
          </button>
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
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  payment: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Form;
