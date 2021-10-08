import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Rating, Button, Counter, Number} from '../../components';
import {FoodDummy6, IcBackWhite, colors, fonts} from '../../res';
import {getData} from '../../utils';
const FoodDetail = ({navigation, route}) => {
  const {params} = route;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  const onCounterChange = value => {
    setTotalItem(value);
  };

  useEffect(() => {
    getData('@userData').then(res => {
      setUserProfile(res);
    });
  }, []);

  const onOrder = () => {
    const totalPrice = totalItem * params.price;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;

    const data = {
      item: {
        id: params.id,
        name: params.name,
        price: params.price,
        picturePath: params.picturePath,
      },
      transaction: {
        totalItem: totalItem,
        totalPrice: totalPrice,
        driver: driver,
        tax: tax,
        total: total,
      },
      userProfile,
    };
    // console.log('data checkout :=> ', data);
    navigation.navigate('OrderSummary', data);
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ImageBackground
        source={{uri: params.picturePath}}
        style={styles.bgImage}>
        <SafeAreaView>
          <TouchableOpacity
            style={styles.icBack}
            onPress={() => navigation.pop()}>
            <IcBackWhite />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.titleContent}>{params.name}</Text>
              <Rating rating={params.rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{params.description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>{params.ingredients} </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.label}>Total Price:</Text>
            <Number number={params.price * totalItem} style={styles.price} />
            {/* <Text style={styles.price}>IDR {params.price * totalItem}</Text> */}
          </View>
          <View style={styles.wrapperButton}>
            <Button
              textButton="Order Now"
              // onPress={() => navigation.navigate('OrderSummary')}
              onPress={onOrder}
            />
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
