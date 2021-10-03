import React, {useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {ImgLogo_svg, strings, colors} from '../../res';
import {styles} from './styles';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('@token').then(res => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <View style={styles.container}>
        <ImgLogo_svg />
        <Text style={styles.title}>{strings.appName}</Text>
      </View>
    </>
  );
};

export default SplashScreen;
