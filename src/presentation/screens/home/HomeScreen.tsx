import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {getPokemons} from '../../../actions/pokemons';
import {PokeballBG} from '../../components/ui/PokeballBG';
import {Pokemon} from '../../../domain/entities/pokemon';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../../components/pokemons/PokemonCard';

export const HomeScreen = () => {
  const {isLoading, data: pokemons = []} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 60, //60 minutos
  });

  const {top} = useSafeAreaInsets();

  return (
    <View style={globalTheme.globalMargin}>
      <PokeballBG style={styles.imgPosition} />
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{marginTop: top + 20}}
        ListHeaderComponent={() => <Text variant="displayMedium">Pokédex</Text>}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
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
