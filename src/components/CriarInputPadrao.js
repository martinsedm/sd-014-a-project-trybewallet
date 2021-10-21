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
  n: PropTypes.arrayOf(PropTypes.string).isRequired,
  t: PropTypes.arrayOf(PropTypes.string).isRequired,
  v: PropTypes.arrayOf(PropTypes.string).isRequired,
  a: PropTypes.arrayOf(PropTypes.string).isRequired,
  o: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CIP;
