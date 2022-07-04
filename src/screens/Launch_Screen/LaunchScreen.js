import React from 'react';

import {StyleSheet, Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function LaunchScreen() {
  return (
    // <View style={styles.ViewStyle}>
    //   <Text style={styles.ScreenStyle}>Ecran de lancement</Text>
    // </View>

    <LinearGradient colors={['#3EADCF', '#B0E7FF', '#ABE9CD', '#69A4FE']}>
      <View style={styles.ViewStyle}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo/sans_ombre.png')}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    height: '100%',
    // backgroundColor: '#B0E7FF',
  },

  logo: {
    width: 250,
    height: 253,
  },
});
