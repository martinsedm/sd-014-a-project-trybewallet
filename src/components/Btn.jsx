import React from 'react';
import PropTypes from 'prop-types';

class Btn extends React.Component {
  render() {
    const { name, handleOnClick } = this.props;
    return (
      <button
        type="button"
        onClick={ handleOnClick }
      >
        { name }
      </button>
    );
  }
}

Btn.propTypes = {
  name: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Btn;
