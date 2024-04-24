import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <Text style={{color:'white'}}>Hello </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
