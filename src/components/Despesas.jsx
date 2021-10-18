import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Despesas extends Component {
  render() {
    const { despesas } = this.props;
    return (
      <div>
        {despesas.map((despesa, index) => (
          <div key={ index } id={ index }>
            <p>{despesa.description}</p>
            <p>{despesa.value}</p>
            <p>{despesa.currency}</p>
            <p>{despesa.method}</p>
            <p>{despesa.tag}</p>
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
