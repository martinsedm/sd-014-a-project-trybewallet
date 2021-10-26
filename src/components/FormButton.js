import React from 'react';
import PropTypes from 'prop-types';

class FormButton extends React.Component {
  render() {
    const { onClick, label, testid, id } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        data-testid={ testid }
        id={ id }
      >
        { label }
      </button>
    );
  }
}

FormButton.defaultProps = {
  id: 0,
};

FormButton.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default FormButton;
