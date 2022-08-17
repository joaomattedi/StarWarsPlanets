import React from 'react';
import InputName from './InputName';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function Table() {
  return (
    <>
      <InputName />
      <table>
        <TableHead />
        <TableBody />
      </table>
    </>
  );
}
