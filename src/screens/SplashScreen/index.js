import React from 'react';
import {Text, View} from 'react-native';
import {ImgLogo_svg, strings} from '../../res';
import {styles} from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImgLogo_svg />
      <Text style={styles.title}>{strings.appName}</Text>
    </View>
  );
};

export default SplashScreen;
