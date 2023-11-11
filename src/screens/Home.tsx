import React from 'react';
import {View} from 'react-native';
import Hello from '@components/Hello';
import PokemonList from '@components/PokemonList';

export default function Home() {
  return (
    <View>
      <Hello />
      <PokemonList />
    </View>
  );
}
