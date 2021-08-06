import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {IcBack} from '../../../res';

import {styles} from './styles';

const Header = ({title, subTitle, onPressIcBack}) => {
  return (
    <View style={styles.container}>
      {onPressIcBack && (
        <TouchableOpacity style={styles.wrapperIcBack} onPress={onPressIcBack}>
          <IcBack />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;
