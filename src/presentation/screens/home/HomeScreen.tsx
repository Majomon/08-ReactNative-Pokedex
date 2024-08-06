import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {getPokemons} from '../../../actions/pokemons';
import {PokeballBG} from '../../components/ui/PokeballBG';

export const HomeScreen = () => {
  const {isLoading, data = []} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 60, //60 minutos
  });

  return (
    <View>
      <PokeballBG style={styles.imgPosition} />
    </View>
  );
};

const styles = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
