import React from 'react';
import '../../styles/addfinance.css';
import apiMoeda from '../../services/apiMoedas';

class Addfinance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
    };
    this.reloadStateMoedas = this.reloadStateMoedas.bind(this);
  }

  async componentDidMount() {
    const response = await apiMoeda();
    const arrOptions = Object.keys(response);
    arrOptions.splice(1, 1);
    this.reloadStateMoedas(arrOptions);
  }

  reloadStateMoedas(moedas) {
    this.setState({ moedas });
  }

  inputGenerato({ tag, typeInput, clas }) {
    return (
      <label className={ clas } htmlFor={ tag }>
        {`${tag}:`}
        <input id={ tag } type={ `${typeInput}` } />
      </label>
    );
  }

  selectGenerat({ opt, id, textLabel, clas }) {
    return (
      <label className={ clas } htmlFor={ id }>
        {`${textLabel}:`}
        <select id={ id }>
          {opt.map((select) => <option key={ select }>{ select }</option>)}
        </select>
      </label>
    );
  }

  render() {
    const optionpay = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { moedas } = this.state;
    return (
      <form className="containner-form">

        { this.inputGenerato(
          { tag: 'Valor', typeInput: 'number', clas: 'label-Valor' },
        ) }

        { this.selectGenerat(
          { opt: moedas, id: 'moeda', textLabel: 'Moeda', clas: 'label-moeda' },
        ) }

        { this.selectGenerat(
          { opt: optionpay,
            id: 'pagamento',
            textLabel: 'Método de pagamento',
            clas: 'label-pay' },
        ) }

        { this.selectGenerat(
          { opt: category, id: 'categoria', textLabel: 'Tag', clas: 'label-category' },
        ) }

        { this.inputGenerato(
          { tag: 'Descrição', typeInput: 'text', clas: 'label-descricao' },
        ) }
        <button className="btn" type="button">Adicionar</button>
      </form>
    );
  }
}

export default Addfinance;
