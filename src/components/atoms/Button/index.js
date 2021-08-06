import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles.js';

const Button = ({
  noContainer,
  disable,
  textButton,
  onPress,
  color,
  fontColor,
}) => {
  if (disable) {
    return (
      <View onPress={onPress} style={styles.containerDisable}>
        <Text style={styles.textButtonDisable}>{textButton}</Text>
      </View>
    );
  }
  if (noContainer) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textButton(fontColor)}>{textButton}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container(color)}>
      <Text style={styles.textButton(fontColor)}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default Button;
