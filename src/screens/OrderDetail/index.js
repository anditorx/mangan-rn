import Axios from 'axios';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Header, ListItemFood, ItemValue, Button, Gap} from '../../components';
import {FoodDummy1, colors, fonts} from '../../res';
import * as Constants from '../../config/Constant.js';
import * as Services from '../../config/Services';
import {getData} from '../../utils';

const OrderDetail = ({navigation, route}) => {
  const param = route.params;

  const onCancel = () => {
    const urlService =
      Constants.BASE_URL + Services.transaction + `/${param.id}`;
    const data = {
      status: 'CANCELLED',
    };
    getData('@token').then(resToken => {
      Axios.post(urlService, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          console.log('success cancel order : ', res);
          navigation.reset({
            index: 0,
            routes: [{name: 'MainApp', screen: 'Order'}],
          });
        })
        .catch(err => {
          console.log('error cancel order : ', err);
        });
    });
  };

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Header
            onPressIcBack={() => navigation.goBack()}
            title="Order Detail"
            subTitle="You deserve better meal"
          />
          <View style={styles.content}>
            <Text style={styles.label}>Item Ordered</Text>
            <ListItemFood
              image={{uri: param.food.picturePath}}
              title={param.food.name}
              price={param.food.price}
              type="order-summary"
              items={param.quantity}
              orderSummary
            />
            <Text style={styles.label}>Details Transaction</Text>
            <ItemValue
              label={param.food.name}
              value={param.food.price * param.quantity}
              type="currency"
            />
            <ItemValue label="Delivery" value={50000} type="currency" />
            <ItemValue
              label="Tax 10%"
              value={(param.food.price * param.quantity * 10) / 100}
              type="currency"
            />
            <ItemValue
              label="Total Price"
              value={param.total}
              valueColor={colors.topaz}
              type="currency"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>Deliver to:</Text>
            <ItemValue label="Name" value={param.user.name} />
            <ItemValue label="Phone No" value={param.user.phoneNumber} />
            <ItemValue label="Address" value={param.user.address} />
            <ItemValue label="House No" value={param.user.houseNumber} />
            <ItemValue label="City" value={param.user.city} />
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>Order Status:</Text>
            <ItemValue
              label={`#${param.id}`}
              value={param.status}
              valueColor={
                param.status === 'PENDING' ? colors.topaz : colors.red
              }
            />
          </View>

          <View style={styles.wrapperButton}>
            {param.status === 'PENDING' && (
              <Button
                textButton="Cancel"
                onPress={onCancel}
                color={colors.red}
                fontColor="white"
              />
            )}
          </View>
          <Gap height={25} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OrderDetail;

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
