import React from 'react';
import PropsTypes from 'prop-types';
import { string } from 'yargs';

class Select extends React.Component {
  render() {
    const { name, onChange, value, testId, label, options } = this.props;
    const dataTestId = (testId !== undefined ? testId : `${name}-input`);
    return (
      <label htmlFor={ name }>
        { label }
        <select
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        >
          { options.map((opt, ind) => <option value={ opt } key={ ind }>{ opt }</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropsTypes.string.isRequired,
  onChange: PropsTypes.func.isRequired,
  value: PropsTypes.string.isRequired,
  testId: PropsTypes.string.isRequired,
  label: PropsTypes.string.isRequired,
  options: PropsTypes.arrayOf(string).isRequired,
};

export default Select;
