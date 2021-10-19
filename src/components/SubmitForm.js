import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SubmitForm extends Component {
  render() {
    const { handleClick, text } = this.props;
    return (
      <div>
        <button type="button" onClick={ handleClick }>{text}</button>
      </div>
    );
  }
}

SubmitForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubmitForm;
