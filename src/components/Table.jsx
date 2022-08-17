import React from 'react';
import ActiveFilters from './ActiveFilters';
import InputName from './InputName';
import MultiFilters from './MultiFilters';
import RemoveFilters from './RemoveFilters';
import Sort from './Sort';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function Table() {
  return (
    <>
      <InputName />
      <MultiFilters />
      <ActiveFilters />
      <RemoveFilters />
      <Sort />
      <table>
        <TableHead />
        <TableBody />
      </table>
    </>
  );
}
