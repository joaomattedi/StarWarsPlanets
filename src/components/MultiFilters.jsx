import React, { useState, useContext, useEffect } from 'react';
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

  const comparisonFilter = ['maior que', 'menor que', 'igual a'];

  const dynamicColumns = columnFilter.filter(
    (column) => !filterByNumericValues.some(
      (filterContext) => filterContext.column === column,
    ),
  );

  useEffect(
    () => setFilter({ ...filter, column: dynamicColumns[0] }),
    [filterByNumericValues],
  );

  return (
    <div>
      <select
        name="column"
        id="column"
        onChange={ (e) => setFilter({ ...filter, column: e.target.value }) }
        data-testid="column-filter"
        value={ filter.column }
      >
        {dynamicColumns.map((element) => (
          <option key={ element } value={ element }>
            {element}
          </option>
        ))}
      </select>
      <select
        name="comparison"
        id="comparison"
        onChange={ (e) => setFilter({ ...filter, comparison: e.target.value }) }
        data-testid="comparison-filter"
        value={ filter.comparison }
      >
        {comparisonFilter.map((element, index) => (
          <option key={ index } value={ element }>
            {element}
          </option>
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
