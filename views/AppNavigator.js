
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import strings from "../config/string"

let iconSize = 25;
let menuIcon;

export function populateIcons() {
	return new Promise((resolve, reject) => {
    Promise.all(
    [Icon.getImageSource('md-menu', iconSize, 'black')],
    [Icon.getImageSource('md-home', iconSize, 'black')],
    [Icon.getImageSource('md-contact', iconSize, 'black')],
    [Icon.getImageSource('md-contacts', iconSize, 'black')],
    [Icon.getImageSource('md-log-out', iconSize, 'black')]
    )
			// other fetches
			.then(values => {    
        menuIcon = values[0];
     //    appIcons.menuIcon = values[0];
        //  appIcons.homeIcon = values[1];
        //  appIcons.registerIcon = values[2];
        //  appIcons.profileIcon = values[3];
        //  appIcons.logoutIcon = values[4];


         startSplash();
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
              text: 'This is a left side menu screen'
            },

          }
        },
        center: {
          stack: {
            options: {
              topBar: {
                title: {
                  text: screenTitle,
                },
                leftButtons: [
                  {
                    icon: menuIcon
                   // icon:  require("../assets/ic_salogo.png"),
                  }
                ]
              }
            },
            children: [{
              component: {
                id: screenname,
                name: screenname,
              },

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
      
            passProps: {
              text: 'This is a left side menu screen'
            },

          }
        },})
      
}

export const onClickSwitchToSideMenus = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: "hrms_drawercontainer",
            name: 'hrms_drawercontainer',
                        passProps: {
              side: 'left'
            }
          }
        },
        center: {
          bottomTabs: {
            children: [
              {
                stack: {
                  id: 'hrms_profile',
                  children: [
                    {
                      component: {
                        name: 'hrms_profile',
                        passProps: {
                          text: 'This is a side menu center screen tab 1'
                        },
                        // options: {
                        //   bottomTab: {
                        //     iconColor: 'red',
                        //     textColor: 'red',
                        //     selectedIconColor: 'purple',
                        //     selectedTextColor: 'purple',
                        //   }
                        // }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      iconColor: 'red',
                      textColor: 'red',
                      selectedIconColor: 'purple',
                      selectedTextColor: 'purple',
                      text: 'Tab 1',
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'hrms_policy',
                        passProps: {
                          text: 'This is a side menu center screen tab 2'
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: 'Tab 2',
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'hrms_faq',
                        passProps: {
                          text: 'This is a side menu center screen tab 3'
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: 'Tab 3',

                    }
                  }
                }
              }
            ],
            options: {
              bottomTab: {
                textColor: '#AED581',
                iconColor: '#AED581',
                selectedTextColor: '#90CAF9',
                selectedIconColor: '#90CAF9',
                fontFamily: 'HelveticaNeue-Italic',
                fontSize: 13
              }
            }
          }
        },
       
      }
    }
  });
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

