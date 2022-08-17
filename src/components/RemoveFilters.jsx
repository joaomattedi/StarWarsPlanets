import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function RemoveFilters() {
  const { setFilterByNumeric } = useContext(Context);
  return (
    <button
      type="button"
      onClick={ () => setFilterByNumeric([]) }
      data-testid="button-remove-filters"
    >
      Remover Filtros
    </button>
  );
}
