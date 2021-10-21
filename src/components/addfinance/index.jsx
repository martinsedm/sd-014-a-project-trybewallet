import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/addfinance.css';
import { connect } from 'react-redux';
import apiMoeda from '../../services/apiMoedas';
import { addDispenses } from '../../actions';
import {
  inputGenerato,
  selectGenerat,
  optionpay,
  category,
} from '../../services/tagGenerato';

class Addfinance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
      value: 0,
      typeCurrency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.reloadStateMoedas = this.reloadStateMoedas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submmitForm = this.submmitForm.bind(this);
  }

  async componentDidMount() {
    const response = await apiMoeda();
    const arrOptions = Object.keys(response);
    arrOptions.splice(1, 1);
    this.reloadStateMoedas(arrOptions, response);
  }

  handleChange({ target: { value, name } }) { this.setState({ [name]: value }); }

  reloadStateMoedas(moedas) { this.setState({ moedas }); }

  async submmitForm() {
    const { dispensesCurrent, addStateDispenses } = this.props;
    const { value, typeCurrency, payment, tag, description } = this.state;
    const moedas = await apiMoeda();
    const payload = [
      {
        id: dispensesCurrent.length,
        value,
        description,
        currency: typeCurrency,
        method: payment,
        tag,
        exchangeRates: moedas,
      },
    ];
    addStateDispenses(payload);
  }

  render() {
    const { moedas } = this.state;
    const tagValor = { tag: 'Valor',
      typeInput: 'number',
      clas: 'label-Valor',
      name: 'value',
      handleChange: this.handleChange };

    return (
      <form className="containner-form">
        { inputGenerato(tagValor) }

        { selectGenerat({ opt: moedas,
          id: 'moeda',
          textLabel: 'Moeda',
          clas: 'label-moeda',
          name: 'typeCurrency',
          handleChange: this.handleChange }) }

        { selectGenerat({ opt: optionpay,
          id: 'pagamento',
          textLabel: 'Método de pagamento',
          clas: 'label-pay',
          name: 'payment',
          handleChange: this.handleChange }) }

        { selectGenerat({ opt: category,
          id: 'categoria',
          textLabel: 'Tag',
          clas: 'label-category',
          name: 'tag',
          handleChange: this.handleChange }) }

        { inputGenerato({ tag: 'Descrição',
          typeInput: 'text',
          clas: 'label-descricao',
          name: 'description',
          handleChange: this.handleChange }) }

        <button
          onClick={ this.submmitForm }
          className="btn"
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

// pega valor do state global
const mapStateToProps = (state) => ({
  dispensesCurrent: state.wallet.expenses,
});

// dispara function para adicionar no state global

const mapDispacthToProps = (dispacth) => ({
  addStateDispenses: (dispenses) => dispacth(addDispenses(dispenses)),
});

Addfinance.propTypes = {
  addStateDispenses: PropTypes.func.isRequired,
  dispensesCurrent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispacthToProps)(Addfinance);
