import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcNext, fonts, colors} from '../../../res';

const ListItemMenu = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <IcNext />
    </TouchableOpacity>
  );
};

export default ListItemMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.black,
  },
});
