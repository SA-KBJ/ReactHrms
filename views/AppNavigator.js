
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import strings from "../config/string"

let iconSize = 25;
let menuIcon;

export function populateIcons() {
	let promise = new Promise((resolve, reject) => {
    Promise.all(
    [Icon.getImageSource('md-menu', iconSize, 'black')])
			// other fetches
			.then(values => {    
        menuIcon = values[0];
				resolve(true);
			})
			.catch(error => {
				console.log(error);
				reject(error);
			})
			.done();
	});
}
export const goToLogin = () => {
  Navigation.setRoot({
    root: {
      component: {
        id: strings.screen_login,
        name: strings.screen_login,
        passProps: {
          text: 'This is tab 1'
        }
      }
    }
  });
}
export const goToRootScreen = (screenname,screenTitle)=>{
 
  Navigation.setRoot({
    root: {
      sideMenu: {
          left: {
          component: {
            id: strings.screen_drawer_container,
            name: strings.screen_drawer_container,
            passProps: {
              isSideDrawerVisible: false
            },
          }
        },
        center: {
          stack
      
        },
      }
    }
  });
}
export const goToHome = () => {
  Navigation.setRoot({
    root: {
            component: {
            id: strings.screen_home,
            name: strings.screen_home,
                }
        },
      })
}

export function startSplash(){

  Navigation.setRoot({
    root: {
      component: {
        id: strings.screen_splash,
        name: strings.screen_splash
    }

    }
  });
}

const stack= {
  id:"navigation_stack",
  options: {
    topBar: {
      title: {
        text: "screenTitle",
      },
      leftButtons: [
        {
         //icon: menuIcon
         iconSize:30,
         icon:  require("../assets/ic_drawer.png"),
      
        }
      ]
    }
  },
  children: [{
    component: {
      id: strings.screen_home,
      name: strings.screen_home,
    }
  }]
}


