import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

{ /*Intro Imports */ }
import Kanji from './src/intro/Kanji';
import Radicals from './src/intro/Radicals';

{ /*Dictionary Imports */ }
import Joyo1 from './src/dictionary/Joyo1';

{ /*Navigators */ }
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

{ /*Navigation Screens */ }
function HomeScreen( { navigation  } ) {
  return (
    <View style = {{ flex: 1, alignItems: 'stretch', justifyContent: 'space-around'}}>

      <Button
        title = 'Introduction to Kanji'
        onPress = {() => navigation.navigate('Introduction to Kanji')}
      />

      <Button
        title = 'Introduction to Radicals'
        onPress = {() => navigation.navigate('Introduction to Radicals')}
      />
    </View>
  );
}

function DictionaryScreen( { navigation } ) {
  return (
    <View style = {{ flex: 1, alignItems: 'stretch', justifyContent: 'space-around' }}>

      <Button
        title = 'Jōyō 1'
        onPress = {() => navigation.navigate('Jōyō 1')}
      />

    </View>
  );
}

{ /*Stack Screens */ }
function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = 'React Kanji'
        component = { HomeScreen }
        options = {{
          headerStyle: {
            backgroundColor: '#673AB7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name = 'Introduction to Kanji'
        component = { Kanji }
        options = {{
          headerStyle: {
            backgroundColor: '#673AB7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name = 'Introduction to Radicals'
        component = { Radicals }
        options = {{
          headerStyle: {
            backgroundColor: '#673AB7',
          },
          headerTintColor: '#fff',
          headerTintStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

function DictionaryStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = 'Dictionary'
        component = { DictionaryScreen }
        options = {{
          headerStyle: {
            backgroundColor: '#673AB7',
          },
          headerTintColor: '#fff',
          headerTintStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name = 'Jōyō 1'
        component = { Joyo1 }
        options = {{
          headerStyle: {
            backgroundColor: '#673AB7',
          },
          headerTintColor: '#fff',
          headerTintStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}


{ /*Main Function  */ }
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions = {{
          activeTintColor: '#673AB7',
        }}
      >
        <Tab.Screen name = 'Home' component = { HomeStackScreen } />
        <Tab.Screen name = 'Dictionary' component = { DictionaryStackScreen } />
        <Tab.Screen name = 'Quiz' component = { HomeStackScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;