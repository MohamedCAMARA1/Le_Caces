import React from 'react';

import {SafeAreaView, Image, StyleSheet, Text, View} from 'react-native';
import LaunchScreen from './src/screens/Launch_Screen/LaunchScreen';

const App = () => {
  return (
    <SafeAreaView>
      {/* <Text style={styles.HomeScreen}>Le CACES</Text>
      <Text> Accueil</Text> */}

      <LaunchScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HomeScreen: {
    color: 'red',
    fontSize: 30,
  },
});

export default App;
