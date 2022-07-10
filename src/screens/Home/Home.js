import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircleTile from '../../Components/Clickable_Tile/CircleTile/CircleTile';
import SquareTile from '../../Components/Clickable_Tile/SquareTile/SquareTile';

const Home = () => {
  return (
    <>
      <View style={styles.Container}>
        <View style={styles.subcontainer}>
          <SquareTile />
          <SquareTile />
        </View>

        <View style={styles.subcontainer}>
          <SquareTile />
          <SquareTile />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {flex: 1, justifyContent: 'space-around'},
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;
