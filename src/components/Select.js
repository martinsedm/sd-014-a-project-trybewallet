// import React from 'react';
// import PropTypes from 'prop-types';

// const Select = ({ title, options, id, onChange }) => (
//   <label htmlFor={ id }>
//     <h6>{title}</h6>
//     <select id={ id } name={ id } onChange={ onChange }>
//       {options.map((opt) => (
//         <option key={ opt.value } value={ opt.value }>
//           {opt.name}
//         </option>
//       ))}
//     </select>
//   </label>
// );

// Select.propTypes = {
//   title: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   options: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default Select;

import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      id,
      label,
      name,
      onChange,
      options,
    } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select name={ name } onChange={ onChange } id={ id }>
          { options.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;
