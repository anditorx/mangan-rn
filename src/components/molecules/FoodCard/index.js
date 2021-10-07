import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';
import {FoodDummy1, IcStarOn, IcStarOff, colors, fonts} from '../../../res';

const FoodCard = ({titleFood, image, onPress, rating}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.titleFood}>{titleFood}</Text>
        {/* rating */}
        <Rating rating={rating} />
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 110,
    // height: 110,
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
    width: 110,
    height: 65,
    resizeMode: 'cover',
  },
  content: {
    padding: 5,
  },
  titleFood: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: colors.black,
  },
});
