import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { eraseExpense, eraseTotal } from '../actions';

const EraseBtn = ({ spend, value }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(eraseTotal(value));
    dispatch(eraseExpense(spend));
  };

  return (
    <button
      type="button"
      data-testid="delete-btn"
      onClick={ handleClick }
    >
      Excluir
    </button>
  );
};

EraseBtn.propTypes = {
  spend: PropTypes.shape({}).isRequired,
  value: PropTypes.number.isRequired,
};

export default EraseBtn;
