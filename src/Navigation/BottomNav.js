import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';

// Screens
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import FastImage from 'react-native-fast-image';

//components
import SuccessModal from '../Components/Modals/SuccessModal';

const Tab = createBottomTabNavigator();

const tabIconConfig = (iconName, focused) => ({
  name: focused ? iconName : `${iconName}-outline`,
  size: 28,
  color: focused ? '#000' : '#a4a4a4',
});

const BottomTab = ({route, navigation}) => {
  const tabScreenOptions = {
    headerShown: false,
    tabBarStyle: {
      // paddingVertical: 25,
      // paddingBottom:20,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      position: 'absolute',
      height: 65,
      bottom: 0,
      borderColor: 'transparent',
      elevation: 10,
      paddingHorizontal: 30,
    },
    // tabBarLabelStyle: { fontSize: 12, fontFamily: 'Lato-Bold' },
    tabBarActiveTintColor: '#000', // Set the active tab label color
    tabBarInactiveTintColor: '#a4a4a4',
  };
  const [show, setshow] = useState(false);
  const {success} = route.params;
  
  useEffect(() => {
    console.log(success);
  }, [success]);

  return (
    <>
      <Tab.Navigator
        screenOptions={{...tabScreenOptions, tabBarShowLabel: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FastImage
                style={{width: 28, height: 28}}
                source={
                  focused
                    ? require('../Assets/Images/home.png')
                    : require('../Assets/Images/homefill.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon {...tabIconConfig('layers', focused)} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon {...tabIconConfig('person', focused)} />
            ),
          }}
        />
      </Tab.Navigator>
      <SuccessModal showModal={success} navigation={navigation} />
    </>
  );
};

export default BottomTab;
