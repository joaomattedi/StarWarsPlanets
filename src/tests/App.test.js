import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import testData from './mockData';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(testData)
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('first', () => {
  test('', async () => {
    render(<App />);
    await waitFor(() => expect(fetch).toHaveBeenCalled())
    const ths = screen.getAllByRole('columnheader')
    expect(ths).toHaveLength(13)
    const trs = screen.getAllByRole('row')
    expect(trs).toHaveLength(11)
  });

  test('', async () => {
    render(<App />)
    await waitFor(() => expect(fetch).toHaveBeenCalled())
    const NameFilter = screen.getByTestId('name-filter')
    userEvent.type(NameFilter,'tato')
    expect(await screen.findAllByRole('row')).toHaveLength(2)
  })

  test('',async () => {
    render(<App />)
    await waitFor(() => expect(fetch).toHaveBeenCalled())
    const comparisonFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByTestId('button-filter')
    userEvent.type(valueFilter,'1000')
    userEvent.click(buttonFilter)
    const allPlanetsByPop = screen.getAllByTestId('planet-name')
    expect(allPlanetsByPop).toHaveLength(7)
    userEvent.selectOptions(comparisonFilter,['menor que'])
    userEvent.type(valueFilter,'1000')
    userEvent.click(buttonFilter)
    const allPlanetsByOrbital = screen.getAllByTestId('planet-name')
    expect(allPlanetsByOrbital).toHaveLength(6)
    const deleteSingleBtn = screen.getAllByRole('button', {name:/x/i})
    userEvent.click(deleteSingleBtn[0])
    const deleteAll = screen.getByTestId('button-remove-filters')
    userEvent.click(deleteAll)
    const columnFilter = screen.getByTestId('column-filter')
    userEvent.selectOptions(columnFilter,['orbital_period'])
    expect(columnFilter).toHaveProperty('value','orbital_period')
    userEvent.selectOptions(comparisonFilter,['igual a'])
    userEvent.type(valueFilter,'304')
    userEvent.click(buttonFilter)
    const planets = screen.getAllByTestId('planet-name')
    expect(planets).toHaveLength(1)
  })
  test('', async ()=>{
    render(<App />);

    await waitFor(() => expect(fetch).toHaveBeenCalled() );

    const ascendenteButton = screen.getByRole('radio', {  name: /asc/i});
    const decrescenteBtn = screen.getByRole('radio', {  name: /dsc/i});
    const orderBtn = screen.getByRole('button', {  name: /ordenar/i});
    userEvent.click(ascendenteButton)
    userEvent.click(orderBtn)
    const ascPlanetNames = await screen.findAllByTestId('planet-name')
    expect(ascPlanetNames[3]).toHaveTextContent(/endor/i)
    userEvent.click(decrescenteBtn)
    userEvent.click(orderBtn)
    const dscPlanetNames = await screen.findAllByTestId('planet-name')
    expect(dscPlanetNames[4]).toHaveTextContent(/endor/i)
  })

  test('', async ()=>{
    render(<App />);

    await waitFor(() => expect(fetch).toHaveBeenCalled() );

    const sortColumn = screen.getByTestId('column-sort')
    userEvent.selectOptions(sortColumn, ['diameter'])
    expect(sortColumn).toHaveProperty('value', 'diameter');
  })
})
