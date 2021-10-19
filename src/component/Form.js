import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCota } from '../actions';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { getExpense } = this.props;
    const {
      id, value, description, currency, method, tag } = this.state;
    getExpense({ id, value, description, currency, method, tag });
    this.setState({
      id: id + 1,
    });
  }

  render() {
    return (
      <form>
        <Input handleChange={ this.handleChange } />
        <Select handleChange={ this.handleChange } />
        <button type="button" onClick={ this.handleClick }>Adicionar Despesas</button>
      </form>
    );
  }
}

Form.propTypes = {
  getExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getExpense: (values) => dispatch(fetchCota(values)),
});

export default connect(null, mapDispatchToProps)(Form);
