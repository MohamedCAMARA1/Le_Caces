import React from 'react';
import {View, Text, StyleSheet, YellowBox} from 'react-native';

const CircleTile = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.CircleForm} />
      <Text style={styles.TextStyle}>libelle cercle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    alignItems: 'center',
  },
  CircleForm: {
    marginTop: 2,
    width: 130,
    height: 115,
    backgroundColor: '#DFDFDF',
    borderRadius: 111,
    elevation: 4, //definnit la shadow si c'est un Android
    shadowColor: 'red',
    shadowOpacity: 0.5,
    shadowOffset: {width: 2, height: 2},
  },
  TextStyle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default CircleTile;
