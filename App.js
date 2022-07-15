import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading  from 'expo-app-loading';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerTitle: 'All Categories',
            headerStyle: {backgroundColor: '#24190f'},
            headerTintColor: '#fff',
            contentStyle: {backgroundColor: '#24190f'},
          }}
          >
          <Stack.Screen
            name="MealCategories" 
            component={CategoriesScreen} 
            />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
