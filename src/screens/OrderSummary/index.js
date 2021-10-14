import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {
  Header,
  ListItemFood,
  ItemValue,
  Button,
  Loading,
} from '../../components';
import {FoodDummy1, colors, fonts} from '../../res';

import {WebView} from 'react-native-webview';
import Axios from 'axios';
import {getData} from '../../utils';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://reactnative.dev/');

  useEffect(() => {
    getData('@token').then(res => {
      console.log('token :', res);
      setToken(res.value);
    });
  }, []);

  const onCheckOut = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };
    getData('@token').then(res => {
      Axios.post(
        'http://foodmarket-backend.buildwithangga.id/api/checkout',
        data,
        {
          headers: {
            Authorization: res.value,
          },
        },
      )
        .then(res => {
          console.log('res checkout', res.data);
          setIsPaymentOpen(true);
          setPaymentURL(res.data.data.payment_url);
        })
        .catch(err => {
          console.log('err checkout', err);
        });
    });
  };

  const onNavChange = state => {
    console.log('nav :=> ', state);
    const urlSuccess =
      'http://foodmarket-backend.buildwithangga.id/midtrans/success?order_id=4996&status_code=201&transaction_status=pending';
    const titleWeb = 'Laravel';

    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          onPressIcBack={() => setIsPaymentOpen(false)}
          title="Payment"
          subTitle="You deserve better meal"
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView>
        <Header
          onPressIcBack={() => navigation.pop()}
          title="Order Summary"
          subTitle="You deserve better meal"
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ListItemFood
            image={{uri: item.picturePath}}
            title={item.name}
            price={item.price}
            items={transaction.totalItem}
            type="order-summary"
            orderSummary
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue
            type="currency"
            label={item.name}
            value={transaction.totalPrice}
          />
          <ItemValue
            type="currency"
            label="Delivery"
            value={transaction.driver}
          />
          <ItemValue type="currency" label="Tax 10%" value={transaction.tax} />
          <ItemValue
            type="currency"
            label="Total Price"
            value={transaction.total}
            valueColor={colors.topaz}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No" value={userProfile.phoneNumber} />
          <ItemValue label="Address" value={userProfile.address} />
          <ItemValue label="House No" value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
        </View>

        <View style={styles.wrapperButton}>
          <Button
            textButton="Checkout Now"
            // onPress={() => navigation.replace('SuccessOrder')}
            onPress={onCheckOut}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  wrapperButton: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
});
