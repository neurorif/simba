import React from 'react';
import {View} from 'react-native';
import Hello from '@simba/components/Hello';
import PokemonList from '@simba/components/PokemonList';

export default function Home() {
  return (
    <View>
      <Hello />
      <PokemonList />
    </View>
  );
}
