import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducer';

const FilterButtons = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <button onClick={() => handleFilterChange('All')}>All</button>
      <button onClick={() => handleFilterChange('Active')}>Active</button>
      <button onClick={() => handleFilterChange('Completed')}>Completed</button>
      <button onClick={() => handleFilterChange('Trash')}>Trash</button>
    </div>
  );
};

export default FilterButtons;