import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function ActiveFilters() {
  const { filterByNumericValues, setFilterByNumeric } = useContext(Context);
  return (
    <>
      {filterByNumericValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <span>{filter.column}</span>
          <span>{filter.comparison}</span>
          <span>{filter.value}</span>
          <button
            type="button"
            onClick={ () => setFilterByNumeric(
              filterByNumericValues.filter((element) => element !== filter),
            ) }
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}
