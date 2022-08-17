import React, { useState, useContext } from 'react';
import Context from '../Context/Context';

export default function Sort() {
  const { setOrder } = useContext(Context);
  const [order, setNewOrder] = useState({
    column: 'population',
    sort: '',
  });

  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <div>
      <select
        value={ order.column }
        name="column"
        id="column"
        data-testid="column-sort"
        onChange={ (e) => setNewOrder({ ...order, column: e.target.value }) }
      >
        {columnFilter.map((column) => (
          <option key={ column } value={ column }>{column}</option>
        ))}
      </select>
      <label htmlFor="ASC">
        <input
          type="radio"
          name="sort"
          id="ASC"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ (e) => setNewOrder({ ...order, sort: e.target.value }) }
        />
        ASC
      </label>
      <label htmlFor="DSC">
        <input
          type="radio"
          name="sort"
          id="DSC"
          data-testid="column-sort-input-desc"
          value="DSC"
          onChange={ (e) => setNewOrder({ ...order, sort: e.target.value }) }
        />
        DSC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setOrder(order) }
      >
        Ordenar
      </button>
    </div>
  );
}
