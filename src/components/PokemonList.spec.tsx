import React from 'react';
import {it, expect} from '@jest/globals';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import PokemonList from './PokemonList';
import useFetchPokemon from '@simba/network/useFetchPokemon';

jest.mock('@network/useFetchPokemon', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
    ],
  })),
}));

describe('PokemonList', () => {
  it('should see a pokemon list', () => {
    render(<PokemonList />);
    expect(screen.getByText('bulbasaur')).toBeTruthy();
    expect(screen.getByText('ivysaur')).toBeTruthy();
    expect(screen.getByText('venusaur')).toBeTruthy();
  });

  it('should see an error if call have failed', () => {
    (useFetchPokemon as jest.Mock).mockImplementationOnce(() => ({
      isError: true,
    }));
    render(<PokemonList />);
    expect(screen.getByText('Error occured')).toBeTruthy();
  });

  it('should see a loading indicator if loading', () => {
    (useFetchPokemon as jest.Mock).mockImplementationOnce(() => ({
      isPending: true,
    }));
    render(<PokemonList />);
    expect(screen.getByTestId('activity-indicator')).toBeTruthy();
  });

  it('should add to favorite first item', () => {
    render(<PokemonList />);
    const firstRow = screen.getByTestId('pokemon-0');
    fireEvent.press(within(firstRow).getByText('Add to favorite'));
    expect(within(firstRow).getByText('Favorite')).toBeTruthy();
  });

  it('should remove from favorite first item', () => {
    render(<PokemonList />);
    const firstRow = screen.getByTestId('pokemon-0');
    fireEvent.press(within(firstRow).getByText('Add to favorite'));
    expect(within(firstRow).getByText('Favorite')).toBeTruthy();
    fireEvent.press(within(firstRow).getByText('Favorite'));
    expect(within(firstRow).getByText('Add to favorite')).toBeTruthy();
  });
});
