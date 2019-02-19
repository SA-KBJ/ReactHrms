import React from 'react';
import { Navigation } from "react-native-navigation";
import {registerScreens} from './views/screens/Screens'
import {populateIcons} from './views/AppNavigator'


function start(){
  registerScreens()
   Navigation.events().registerAppLaunchedListener(() => {
    populateIcons();
})
 

}
module.exports={
    start
}
  






