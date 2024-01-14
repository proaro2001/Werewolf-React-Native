import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./app/screens/Welcome";
import CharacterSelectionPage from "./app/screens/CharacterSelectionPage";


const Stack = createNativeStackNavigator(); // Create a stack navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CharacterSelectionPage" component={CharacterSelectionPage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Welcome />
    // <CharacterSelectionPage />
  );
}
