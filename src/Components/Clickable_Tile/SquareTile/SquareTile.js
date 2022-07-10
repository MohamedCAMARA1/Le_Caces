import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SquareTile = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.SquareForm} />
      <Text style={styles.TextStyle}>libelle rectangle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SquareForm: {
    marginTop: 2,
    width: 130,
    height: 170,
    borderRadius: 20,
    backgroundColor: '#DFDFDF',
    elevation: 4, //definnit la shadow si c'est un Android
    shadowColor: '#06184D',
    shadowOpacity: 0.9,
    shadowOffset: {width: 2, height: 2},
  },
  Container: {
    marginTop: 10,
    alignItems: 'center',
  },
  TextStyle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SquareTile;
