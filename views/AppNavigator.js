import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import strings from "../config/string"
let iconSize = 25;
let menuIcon;

export const goToForgotPasssword =()=>{
  Navigation.mergeOptions('loginstack', {
    topBar: {
    title: {
      text: "Forgot Password"
    },
   
}
});
  Navigation.push('loginstack', {
    component: {
      id: strings.screen_forgotpassword,
      name: strings.screen_forgotpassword
   }
  
   
  });
}
export const goToLogin = () => {

  promise = new Promise((resolve, reject) => {
    Promise.all(
    [Icon.getImageSource('md-menu', iconSize, 'black')])
			// other fetches
			.then(values => {    
        menuIcon = values[0];
        Navigation.setRoot({
          root: {
            stack: {
              id:"loginstack",
              children: [{
                component: {
                  id: strings.screen_login,
                  name: strings.screen_login,
                  passProps: {
                   text: 'This is tab 1'
                 }
                }
              }],
              options: {
                topBar: {
                  title: {
                    text: "Login"
                  },
                  backButton: {visible: false},

                 }

              }
            }
          }
        });
				resolve(true);
			})
			.catch(error => {
				console.log(error);
				reject(error);
			})
			.done();
	});

}
export const goToRootScreen = (screenname,screenTitle)=>{
  titleScreen = screenTitle;
  Navigation.setRoot({
    root: {
      sideMenu: {
          left: {
          component: {
            id: strings.screen_drawer_container,
            name: strings.screen_drawer_container,
          }
        },
        center: {
          stack 
          :{
          id:"navigation_stack",
          options: {
            topBar: {
              title:{
                text:"Home"
              },
              leftButtons: [{
                 id:"menuIcon",
                 icon: menuIcon,    
                }]
            }},
          children: [{
            component: {
              id: strings.screen_home,
              name: strings.screen_home,
            }
          }]
         }
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
