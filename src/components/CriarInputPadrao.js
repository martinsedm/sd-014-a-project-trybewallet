import React from 'react';
import PropTypes from 'prop-types';

class CIP extends React.Component {
  render() {
    const { t, n, v, a, o } = this.props;
    return (
      <label htmlFor={ n }>
        {a}
        <input
          type={ t }
          name={ n }
          id={ n }
          value={ v }
          onChange={ o }
        />
      </label>
    );
  }
}

CIP.propTypes = {
  n: PropTypes.string.isRequired,
  t: PropTypes.string.isRequired,
  v: PropTypes.string.isRequired,
  a: PropTypes.string.isRequired,
  o: PropTypes.func.isRequired,
};

export default CIP;
