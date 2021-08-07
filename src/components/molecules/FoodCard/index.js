import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {FoodDummy1, IcStarOn, IcStarOff, colors, fonts} from '../../../res';

const FoodCard = ({titleFood, image, onPress, rating}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.titleFood}>{titleFood}</Text>
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
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 14,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  titleFood: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.black,
  },
  ratingContainer: {flexDirection: 'row'},
  starContainer: {flexDirection: 'row'},
});
