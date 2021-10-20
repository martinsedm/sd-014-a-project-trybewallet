import React, { Component } from 'react';
import PaymentMethod from './PaymentMethod';
import TagComponent from './TagComponent';
import CurrenciesComp from './CurrenciesComp';
import DescriptionComp from './DescriptionComp';
import ValueComp from './ValueComp';
import BtnComp from './BtnComp';

export default class FormsComp extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      moedas: [],
    };
  }

  render() {
    const { value, method, tag, description, moedas } = this.state;
    return (
      <forms>
        <ValueComp value={ value } />
        <CurrenciesComp moedas={ moedas } />
        <PaymentMethod method={ method } />
        <TagComponent tag={ tag } />
        <DescriptionComp description={ description } />
        <BtnComp />
      </forms>
    );
  }
}
