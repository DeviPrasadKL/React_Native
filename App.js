import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import Home from './Components/Home';
import About from './Components/About';
import MovieDetails from './Components/MovieDetails';
import Update from './Components/Update';
import AddMovie from './Components/AddMovie';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen name="About" component={About} options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Alert"
                color="#f4511e"
              />
            ),
          }} />
          <Stack.Screen name="Details" component={MovieDetails} />
          <Stack.Screen name="Update" component={Update} />
          <Stack.Screen name="Add" component={AddMovie} />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
