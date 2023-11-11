import {create} from 'zustand';
import {StateStorage, createJSONStorage, persist} from 'zustand/middleware';
import {MMKV} from 'react-native-mmkv';

interface PokemonStore {
  favorites: string[];
  addFavorite: (pokemonName: string) => void;
  removeFavorite: (pokemonName: string) => void;
}

const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};

export const usePokemonStore = create<PokemonStore>()(
  persist(
    set => ({
      favorites: [],
      addFavorite: pokemonName =>
        set(state => ({
          favorites: [...state.favorites, pokemonName],
        })),
      removeFavorite: pokemonName =>
        set(state => ({
          favorites: state.favorites.filter(
            favorite => favorite !== pokemonName,
          ),
        })),
    }),
    {
      name: 'pokemon-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
