import React from 'react';
import {Text, View} from 'react-native';
import sum from '@helpers/sum';
import useHi from '@hooks/useHi';

export default function Hello() {
  const hi = useHi();

  return (
    <View>
      <Text>Hello World</Text>
      <Text>{sum(2, 2)}</Text>
      <Text>{hi}</Text>
    </View>
  );
}
