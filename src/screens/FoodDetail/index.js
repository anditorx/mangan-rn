import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Rating, Button, Counter} from '../../components';
import {FoodDummy6, IcBackWhite, colors, fonts} from '../../res';

const FoodDetail = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ImageBackground source={FoodDummy6} style={styles.bgImage}>
        <SafeAreaView>
          <TouchableOpacity style={styles.icBack}>
            <IcBackWhite />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.titleContent}>Title Food</Text>
              <Rating rating="4.2" />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Lorem Ipsum has been the industry's </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.label}>Total Price:</Text>
            <Text style={styles.price}>Rp 43.000</Text>
          </View>
          <View style={styles.wrapperButton}>
            <Button textButton="Order Now" />
          </View>
        </View>
      </View>
    </>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  bgImage: {
    height: 350,
    paddingTop: 26,
    paddingLeft: 22,
  },
  icBack: {
    backgroundColor: colors.greyLowOpacity,
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
  },
  mainContent: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  titleContent: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.black,
  },
  desc: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.black,
    marginBottom: 14,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.black,
  },
  price: {
    fontFamily: fonts.Medium,
    fontSize: 18,
    color: colors.black,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  wrapperButton: {
    width: 165,
  },
});
