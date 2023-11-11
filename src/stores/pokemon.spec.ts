import {act, renderHook} from '@testing-library/react-native';
import {usePokemonStore} from './pokemon';
import {describe, expect, it} from '@jest/globals';

describe('usePokemonStore', () => {
  it('should start with no favorites', () => {
    const {result} = renderHook(() => usePokemonStore());
    expect(result.current.favorites).toEqual([]);
  });

  it('should add favorite pokemon', () => {
    const {result} = renderHook(() => usePokemonStore());
    act(() => {
      result.current.addFavorite('Pikachu');
    });
    expect(result.current.favorites).toEqual(['Pikachu']);
  });

  it('should remove favorite pokemon', () => {
    const {result} = renderHook(() => usePokemonStore());
    act(() => {
      result.current.addFavorite('Pikachu');
    });
    act(() => {
      result.current.removeFavorite('Pikachu');
    });
    expect(result.current.favorites).toEqual([]);
  });
});
