import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function TableHead() {
  const { planets } = useContext(Context);
  const headers = Object.keys(planets[0] || {}).filter(
    (element) => element !== 'residents',
  );
  return (
    <thead>
      <tr>
        {headers.map((element) => (
          <th key={ element }>{element}</th>
        ))}
      </tr>
    </thead>
  );
}
