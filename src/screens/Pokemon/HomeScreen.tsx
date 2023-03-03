import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { usePokemons } from '../../hooks/usePokemons';
// import { useTerminos } from '../../hooks/useTerminos';

export const HomeScreen = () => {
  const { pokemons } = usePokemons();
  console.log(pokemons)
  // const { terminos } = useTerminos();
  // console.log(terminos);
  return (
    <View 
      style={styles.container}
    >
      <Text style={styles.textStyle}>
        Pokedex
      </Text>
    </View>
      
  )
};

const styles = StyleSheet.create({
    container: {
      top: 20,
      left: 50,
    },
    textStyle: {
      fontSize: 40,
      fontWeight: 'bold',
    }
});
