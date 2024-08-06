import {pokeApi} from '../../config/api/pokeApi';
import {Pokemon} from '../../domain/entities/pokemon';
import {
  PokeAPIPaginatedResponse,
  PokeAPIPokemon,
} from '../../infrastructure/interfaces/pokeApi.interfaces';

export const getPokemons = async (
  page: number,
  limit: number = 20,
): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;

    const {data} = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    const pokemonPromises = data.results.map(info => {
      return pokeApi.get<PokeAPIPokemon>(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);

    console.log(pokeApiPokemons);
    
    return [];
  } catch (error) {
    console.log(error);
    throw new Error('Error, no se pudo obtener los pokemones');
  }
};
