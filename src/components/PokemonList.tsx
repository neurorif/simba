import React from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import useFetchPokemon, {Pokemon} from '@simba/network/useFetchPokemon';
import {usePokemonStore} from '@simba/stores/pokemon';

export default function PokemonList() {
  const {isError, isPending, data} = useFetchPokemon();
  const pokemonStore = usePokemonStore();

  if (isError) {
    return <Text>Error occured</Text>;
  }

  if (isPending) {
    return <ActivityIndicator testID="activity-indicator" />;
  }

  const handlePressFavorite = (item: Pokemon) => {
    if (pokemonStore.favorites.includes(item.name)) {
      pokemonStore.removeFavorite(item.name);
    } else {
      pokemonStore.addFavorite(item.name);
    }
  };

  return (
    <FlatList
      testID="pokemon-list"
      data={data}
      renderItem={({item, index}) => {
        const title = pokemonStore.favorites.includes(item.name)
          ? 'Favorite'
          : 'Add to favorite';

        return (
          <View testID={`pokemon-${index}`}>
            <Text>{item.name}</Text>
            <Button
              testID="pokemon-favorite-button"
              onPress={() => handlePressFavorite(item)}
              title={title}
            />
          </View>
        );
      }}
    />
  );
}
