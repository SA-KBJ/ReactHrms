import Home from './home/Home'
import Login from './authentication/Login'
import ForgotPassword from './forgotpassword/ForgotPassword'
import Splash from './splash/Splash'
import Profile from './profile/Profile'

import MyLeave from '../views/leave/MyLeave'
import LeaveDetails from '../views/leave/LeaveDetails'
import NewLeave from './leave/NewLeave'
import Policy from './policy/Policy'
import Faq from './faq/Faq'
import colors from "../config/colors";
import DrawerContainer from "./drawer/DrawerContainer"
import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";

import {createStackNavigator,createDrawerNavigator,createSwitchNavigator } from "react-native-navigation";

const AuthStack = createStackNavigator(
    {
     Login: { screen: Login },
     ForgotPassword: { screen: ForgotPassword }
    },
     {
         headerLayoutPreset: 'center',
         headerBackTitleStyle:null,
         headerTintColor: colors.colorPrimary,
         headerTitleStyle: {
           fontWeight: 'bold',
           alignSelf:'center'
         },
     }
 );


 const HomeStack = createStackNavigator({

    HomeScreen: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Solution Analysts HRMS",
        headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        {/* <Icon name='menu' size={35} /> */}
        </TouchableOpacity></View>
      })
    },
  
  });

  const ProfileStack = createStackNavigator({

    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Profile",
        headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
      })
    },
  
  });

  const NewLeaveStack = createStackNavigator({
    NewLeave: {
      screen: NewLeave,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "NewLeave",
        headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
      })
    },
  
  });

  const PolicyStack = createStackNavigator({
    Policy: {
      screen: Policy,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Policy",
        headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
      })
    },
  
  });

  const FaqStack = createStackNavigator({
    Faq: {
      screen: Faq,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Faq",
        headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
      })
    },
  
  });

  const DrawerStack = createDrawerNavigator({
   Home: {screen: HomeStack},
    Profile: {screen: ProfileStack},
    NewLeave: {screen: NewLeaveStack},
    Policy: { screen: PolicyStack},
    Faq: { screen: FaqStack} 
    },
    {
      headerMode: 'none',
      gesturesEnabled: false,
      contentComponent: DrawerContainer
    })
const DrawerMainScreens = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    Profile: {
        screen: Profile,
        
    },
    NewLeave: {
        screen: NewLeave,
    },
    Policy: {
        screen: Policy,
    },
    Faq: {
        screen: Faq,
    }
    
},
{
    headerMode: 'screen',
headerLayoutPreset: 'center',
headerBackTitleStyle:null,
headerTintColor: colors.colorPrimary,
headerTitleStyle: {
  fontWeight: 'bold',
  alignSelf:'center'
},
   
});
const AppNavigator = createSwitchNavigator({
    Splash: { screen: Splash },
    Auth: AuthStack,
    HomeScreen:DrawerStack,

}, {
        initialRouteName: 'Splash',
        headerLayoutPreset: 'center',
       
    }
);
// { 
//   headerMode: 'none' 
// }
export default AppNavigator;
