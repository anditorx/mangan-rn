import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOn, IcStarOff, colors, fonts} from '../../../res';

const Rating = ({rating}) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
      </View>
      <Text>{rating}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {flexDirection: 'row'},
  starContainer: {flexDirection: 'row'},
});
