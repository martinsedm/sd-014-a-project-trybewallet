import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Despesas extends Component {
  render() {
    const { despesas } = this.props;
    return (
      <div>
        {despesas.map((despesa, index) => (
          <div key={ index }>
            <p>{despesa.desc}</p>
            <p>{despesa.moeda}</p>
            <p>{despesa.pag}</p>
            <p>{despesa.tag}</p>
            <p>{despesa.valor}</p>
          </div>
        ))}
      </div>
    );
  }
}

Despesas.propTypes = {
  despesas: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

export default Despesas;
