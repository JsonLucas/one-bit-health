import { StyleSheet, Text, View, Pressable, Keyboard } from 'react-native';
import ImcForm from './src/components/FormIMC';
import Title from './src/components/Title';

export default function App() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Title />
      <ImcForm />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80
  },
});
