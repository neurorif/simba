import {useQuery} from '@tanstack/react-query';

export type Pokemon = {
  name: string;
  url: string;
};

function fetchPokemon(): Promise<Pokemon[]> {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(res => res.json())
    .then(res => res.results);
}

export default function useFetchPokemon() {
  return useQuery({queryKey: ['pokemon'], queryFn: fetchPokemon});
}
