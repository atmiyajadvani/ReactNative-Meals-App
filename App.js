import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading  from 'expo-app-loading';

import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {

  return (
    <View>
      <StatusBar style="light" />
      <CategoriesScreen></CategoriesScreen>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
