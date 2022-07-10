//Ne pas oublier le component Launchscreen qui est créé mais pas utiliser car xcode permet de le faire
import React from 'react';

import {SafeAreaView, Image, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home/Home';
import Footer from './src/Components/Footer/Footer';
import Header_bar from './src/Components/Header/Header_Bar';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Header_bar />
      <Home />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HomeScreen: {
    color: 'red',
    fontSize: 30,
    backgroundColor: '#F4F4F4',
  },
  Container: {flex: 1},
});

export default App;
