import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { nome, valor, callback } = this.props;
    return (
      <label htmlFor={ nome }>
        {nome === 'valor' ? 'Valor:' : 'Descrição:'}
        <input
          type="text"
          name={ nome }
          id={ nome }
          value={ valor }
          onChange={ callback }
        />
      </label>
    );
  }
}

Inputs.propTypes = {
  nome: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Inputs;
