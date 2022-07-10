import React from 'react';
import {Platform} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Footer = () => {
  return (
    <LinearGradient style={styles.Container} colors={['#0138A4', '#001E57']}>
      <View style={styles.Container}>
        <Text>ici le header</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 90,
    //backgroundColor: '#001E57',
  },
});
export default Footer;
