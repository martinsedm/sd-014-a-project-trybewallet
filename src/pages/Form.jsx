import React from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Select from '../components/Select';
import { methodList } from '../services/requestAPI';

class Form extends React.Component {
  render() {
    const { coins, value, description, currency, method, tag, handleChange } = this.props;
    return (
      <form>

        <Input
          nomeLabel="Valor"
          id="value"
          name="value"
          valueId={ value }
          onChangeInput={ handleChange }
          type="number"
          minNumber="1"
        />

        <Input
          nomeLabel="Descrição"
          id="description"
          name="description"
          valueId={ description }
          onChangeInput={ handleChange }
        />

        <Select
          id="currency"
          nomeLabel="Moeda"
          idValue={ currency }
          onChangeSelect={ handleChange }
          options={ coins }
        />
        <Select
          id="method"
          nomeLabel="Método de pagamento"
          idValue={ method }
          onChangeSelect={ handleChange }
          options={ methodList }
        />
        <Select
          id="tag"
          nomeLabel="Tag"
          idValue={ tag }
          onChangeSelect={ handleChange }
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        />

      </form>);
  }
}

Form.propTypes = {
  coins: PropTypes.arrayOf().isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Form;
