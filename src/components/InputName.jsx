import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function InputName() {
  const {
    filterByName: { name },
    setName,
  } = useContext(Context);
  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ name }
      onChange={ (e) => setName(e.target.value) }
    />
  );
}
