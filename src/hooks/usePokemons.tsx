import { useEffect, useState } from "react";
import { pokeApi } from "../api/pokeRes"
import { Pokemons, Pokes } from "../interfaces/pokeRes";

export const usePokemons = () => {

  useEffect(() => {
    getPokemons()
  }, []);

  const [pokemons, setPokemon] = useState<Pokes[]>([]);

  const getPokemons = async () => {
    try {
      const resp = await pokeApi.get<Pokemons>('/pokemon');
      setPokemon(resp.data.results)
      
    } catch (error) {
      console.log(error)
    }
  };

  return {
    getPokemons,
    pokemons
  }
}
