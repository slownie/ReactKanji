import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


{ /*Navigators */ }
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

{ /*Navigation Screens */ }
function HomeScreen() {
  return (
    <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

{ /*Stack Screens */ }
function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = "React Kanji"
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
        <Tab.Screen name = 'Dictionary' component = { HomeStackScreen } />
        <Tab.Screen name = 'Quiz' component = { HomeStackScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;