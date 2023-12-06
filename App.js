import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import UserSelectionScreen from './src/entrance';
import ChatScreen from './src/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default App = () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserSelectionScreen">
        <Stack.Screen name="UserSelectionScreen" component={UserSelectionScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  </ApplicationProvider>
);