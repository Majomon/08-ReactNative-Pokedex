import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { getPokemons } from '../../../actions/pokemons';

export const HomeScreen = () => {
  const {isLoading, data} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(),
    staleTime: 1000 * 60 * 60, //60 minutos
  });

  return (
    <View>
      <Text variant="headlineLarge">HomeScreen</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      )}
    </View>
  );
};
