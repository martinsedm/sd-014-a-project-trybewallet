import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense } from '../actions';

import Value from './Value';
import Description from './Description';
import Currency from './Currency';
import Method from './Method';
import Tag from './Tag';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setEditExpense, edit } = this.props;

    const newExpense = {
      id: edit.id,
      ...this.state,
      exchangeRates: edit.exchangeRates,
    };

    setEditExpense(newExpense);
  }

  render() {
    const { value, description } = this.state;

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <Value value={ value } onChange={ this.handleChange } />
          <Description value={ description } onChange={ this.handleChange } />
          <Currency onChange={ this.handleChange } />
          <Method onChange={ this.handleChange } />
          <Tag onChange={ this.handleChange } />

          <button type="submit">Editar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  edit: state.wallet.edit,
});

const mapDispatchToProps = (dispatch) => ({
  setEditExpense: (expense) => dispatch(editExpense(expense)),
});

EditForm.propTypes = {
  setEditExpense: PropTypes.func.isRequired,
  edit: PropTypes.shape({
    id: PropTypes.number,
    exchangeRates: PropTypes.shape({
      USD: PropTypes.shape({ code: PropTypes.string }),
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
