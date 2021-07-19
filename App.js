import React from 'react'
import { View, Text } from 'react-native'
import {SafeAreaView, StyleSheet} from 'react-native'
import HomeScreen from './src/screens/HomeScreen'

if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
