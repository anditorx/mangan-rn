import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';

import {
  IcHomeOn,
  IcHomeOff,
  IcOrderOn,
  IcOrderOff,
  IcProfileOn,
  IcProfileOff,
  colors,
  fonts,
} from '../../../res';

const Icon = ({label, isFocused}) => {
  switch (label) {
    case 'Home':
      return isFocused ? <IcHomeOn /> : <IcHomeOff />;
    case 'Order':
      return isFocused ? <IcOrderOn /> : <IcOrderOff />;
    case 'Profile':
      return isFocused ? <IcProfileOn /> : <IcProfileOff />;
    default:
      return <IcHomeOn />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.wrapperIcon}>
            <Icon label={label} isFocused={isFocused} />
            <Text style={styles.txtLabel(isFocused)}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 5,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
  txtLabel: isFocused => ({
    color: isFocused ? colors.primary : colors.lightGrey,
    fontSize: 12,
    fontFamily: isFocused ? fonts.Medium : fonts.Light,
  }),
  wrapperIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
