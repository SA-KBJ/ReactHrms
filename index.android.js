/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import App from './App';
import Splash from './views/splash/Splash'
import {ToastAndroid} from 'react-native'
import { Navigation } from "react-native-navigation";

Navigation.registerComponent(`navigation.playground.Splash`, () => Splash);

Navigation.events().registerAppLaunchedListener(() => {
    ToastAndroid.show("Init",ToastAndroid.SHORT);
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.Splash",
      }
    }
  });
});
