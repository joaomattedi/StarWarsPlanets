import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services/planetsApi';
import Context from './Context';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    fetchPlanets().then((data) => setPlanets(data.results));
  }, []);

  const context = {
    planets,
  };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}.isRequired;
