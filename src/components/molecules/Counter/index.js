import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcMin, IcPlus, fonts, colors} from '../../../res';
import {Gap} from '../../atoms';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>19</Text>
      <TouchableOpacity>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    marginHorizontal: 10,
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.black,
  },
});
