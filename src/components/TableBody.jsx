import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function TableBody() {
  const { planets, filterByName: { name } } = useContext(Context);
  const re = new RegExp(name, 'gi');
  const filterName = planets.filter((element) => element.name.match(re));
  return (
    <tbody>
      {filterName.map((element) => (
        <tr key={ element.name }>
          <td>{element.name}</td>
          <td>{element.rotation_period}</td>
          <td>{element.orbital_period}</td>
          <td>{element.diameter}</td>
          <td>{element.climate}</td>
          <td>{element.gravity}</td>
          <td>{element.terrain}</td>
          <td>{element.surface_water}</td>
          <td>{element.population}</td>
          <td>{element.films}</td>
          <td>{element.created}</td>
          <td>{element.edited}</td>
          <td>{element.url}</td>
        </tr>
      ))}
    </tbody>
  );
}
