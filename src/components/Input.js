// import React from 'react';
// import PropTypes from 'prop-types';

// const Input = ({ title, id, type, value, onChange }) => (
//   <label htmlFor={ id }>
//     <h6>{ title }</h6>
//     <input id={ id } type={ type } name={ id } value={ value } onChange={ onChange } />
//   </label>
// );

// Input.propTypes = {
//   title: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };

// Input.defaultProps = {
//   type: 'text',
// };

// export default Input;

import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      id,
      label,
      type,
      name,
      value,
      onChange,
    } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
