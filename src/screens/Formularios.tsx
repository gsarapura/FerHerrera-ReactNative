/*

 THIS GOES WITH useForm()

 */

import {StyleSheet, Text, TextInput} from 'react-native';
import {useForm} from '../hooks/useForm';

export const Formularios = () => {
  const {state, email, password, onChange} = useForm({
    email: 'fsadfds@gmail.com',
    password: 'aaas234'
  });

  return (
    <>
      <Text>Formularios</Text>

      <TextInput
        editable={true}
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={e => onChange(e, 'email')}
      />
      <TextInput
        editable={true}
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={e => onChange(e, 'password')}
      />
      <Text>{JSON.stringify(state, null, 2)}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
