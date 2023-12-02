import React from 'react';
import {Button, Text, View} from 'react-native';
import sum from '@simba/helpers/sum';
import useHi from '@simba/hooks/useHi';
import {useBearStore} from '@simba/stores/bears';

export default function Hello() {
  const hi = useHi();
  const {bears, increase} = useBearStore();

  return (
    <View>
      <Text>Hello World</Text>
      <Text>{sum(2, 2)}</Text>
      <Text>{hi}</Text>
      <Text>{bears}</Text>
      <Button title="Add bear" testID="increase" onPress={() => increase(1)} />
    </View>
  );
}
