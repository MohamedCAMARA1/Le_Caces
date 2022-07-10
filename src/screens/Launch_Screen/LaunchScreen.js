//mis en place dans xcode
//il reste celui d'Android
//pas nécessaire de coder ??

import React from 'react';

import {StyleSheet, Platform, Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function LaunchScreen() {
  return (
    // <View style={styles.ViewStyle}>
    //   <Text style={styles.ScreenStyle}>Ecran de lancement</Text>
    // </View>

    <LinearGradient colors={['#70A1FF', '#90A1FF', '#FFFFFF', '#B9B5AD']}>
      <View style={styles.ViewStyle}>
        <Image
          style={[styles.logo, styles.ImgShadow]}
          source={require('../../assets/logo/logo_CACES.png')}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 250,
    height: 253,
  },
});
