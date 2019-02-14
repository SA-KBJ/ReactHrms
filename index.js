/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import {AppRegistry} from 'react-native';

// AppRegistry.registerComponent(appName, () => App);
import App from './App';
import Splash from './views/splash/Splash';
import {ToastAndroid} from 'react-native';
import { Navigation } from 'react-native-navigation';

Navigation.registerComponent(`Splash`, () => Splash);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "Splash"
      }
    }
  });
});
