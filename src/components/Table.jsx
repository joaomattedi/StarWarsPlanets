import React from 'react';
import InputName from './InputName';
import MultiFilters from './MultiFilters';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function Table() {
  return (
    <>
      <InputName />
      <MultiFilters />
      <table>
        <TableHead />
        <TableBody />
      </table>
    </>
  );
}
