import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import React from 'react';

//navigation
import {NavigationContainer} from '@react-navigation/native';
SystemNavigationBar.setNavigationColor('white');
SystemNavigationBar.setBarMode('dark');

//screens
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import OtpScreen from '../Screens/OtpScreen';
import BottomTab from './BottomNav';
import ProductScreen from '../Screens/ProductScreen';
import CartScreen from '../Screens/CartScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import AddressScreen from '../Screens/AddressScreen';
import OrderScreen from '../Screens/OrderScreen';
import Checkout from '../Screens/Checkout';
import Payment from '../Screens/PaymentScreen';

const MainNav = () => {
  const Stack = createNativeStackNavigator();
  const user = useSelector(state => state.userInfo);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user.login ? 'BottomNav' : 'Welcome'}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Otp"
          component={OtpScreen}
        />
        <Stack.Screen
          initialParams={{success: false}}
          options={{headerShown: false}}
          name="BottomNav"
          component={BottomTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Product"
          component={ProductScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Cart"
          component={CartScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Orders"
          component={OrdersScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Address"
          component={AddressScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Order"
          component={OrderScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Checkout"
          component={Checkout}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Payment"
          component={Payment}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
