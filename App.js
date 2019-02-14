import React from 'react';
import { Navigation } from "react-native-navigation";
import Splash from './views/splash/Splash'
import {ToastAndroid} from 'react-native'


// const App = createAppContainer(AppNavigator);

Navigation.registerComponent(`navigation.playground.Splash`, () => Splash);
function start(){
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.Splash"
      }
    }
  });
});
}
module.exports={
    start
}
  






