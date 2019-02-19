import React from 'react';
import { Navigation } from "react-native-navigation";
import {registerScreens} from './views/screens/Screens'


// const App = createAppContainer(AppNavigator);

function start(){
  registerScreens()
 Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "hrms_login"
      }
      
    }
  });

 
});
}
module.exports={
    start
}
  






