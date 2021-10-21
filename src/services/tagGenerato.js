import React from 'react';

export const optionpay = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
export const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export const inputGenerato = ({ tag, typeInput, clas, name, handleChange }) => (
  <label className={ clas } htmlFor={ tag }>
    {`${tag}:`}
    <input onChange={ handleChange } name={ name } id={ tag } type={ `${typeInput}` } />
  </label>
);

export const selectGenerat = ({ opt, id, textLabel, clas, name, handleChange }) => (
  <label className={ clas } htmlFor={ id }>
    {`${textLabel}:`}
    <select name={ name } onChange={ handleChange } id={ id }>
      {opt.map((select) => <option key={ select }>{ select }</option>)}
    </select>
  </label>
);
