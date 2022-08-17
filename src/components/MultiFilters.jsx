import React, { useState, useContext } from 'react';
import Context from '../Context/Context';

export default function MultiFilters() {
  const { filterByNumericValues, setFilterByNumeric } = useContext(Context);
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisonFilter = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <div>
      <select
        name="column"
        id="column"
        onChange={ (e) => setFilter({ ...filter, column: e.target.value }) }
        data-testid="column-filter"
      >
        {columnFilter.map((element) => (
          <option
            key={ element }
            value={ element }
          >
            {element}
          </option>
        ))}
      </select>
      <select
        name="comparison"
        id="comparison"
        onChange={ (e) => setFilter({ ...filter, comparison: e.target.value }) }
        data-testid="comparison-filter"
      >
        {comparisonFilter.map((element) => (
          <option key={ element } value={ element }>{element}</option>
        ))}
      </select>
      <input
        type="text"
        value={ filter.value }
        onChange={ (e) => setFilter({ ...filter, value: e.target.value }) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilterByNumeric([...filterByNumericValues, filter]) }
      >
        Inserir Filtro
      </button>
    </div>
  );
}
