import React from 'react';
import { Navigation } from "react-native-navigation";
import {registerScreens} from './views/screens/Screens'
import {startSplash} from './views/AppNavigator'


function start(){
  registerScreens()
   Navigation.events().registerAppLaunchedListener(() => {
    startSplash();
})
 

}
module.exports={
    start
}
  






