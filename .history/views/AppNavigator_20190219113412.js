
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

export const goToLogin = () => {
  Navigation.setRoot({
    root: {
      component: {
        id: 'hrms_login',
        name: 'hrms_login',
        passProps: {
          text: 'This is tab 1'
        }
      }
    }
  });
}

export const goToHome = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: "hrms_drawercontainer",
            name: 'hrms_drawercontainer',
            passProps: {
              text: 'This is a left side menu screen'
            },

          }
        },
        center: {
          stack: {
            options: {
              topBar: {
                icon: <Icon name="md-menu" size={25} color="black" />,
                title: {
                  text: 'Home',
                },
                leftButtons: [
                  {

                  }
                ]
              }
            },
            children: [{
              component: {
                id: "hrms_newleave",
                name: 'hrms_newleave',
              },

            }]
          }

        },

      }
    }
  });
}



export const goToFaq = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'hrms_faq',
            passProps: {
              text: 'This is a left side menu screen'
            }
          }
        },
        center: {
          component: {
            name: 'hrms_home'
          },
        },

      }
    }
  });
}

export const goToPolicy = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'hrms_policy',
            passProps: {
              text: 'This is a left side menu screen'
            }
          }
        },
        center: {
          component: {
            name: 'hrms_home'
          },
        },

      }
    }
  });
}

export const goToNewLeave = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'hrms_newleave',
            passProps: {
              text: 'This is a left side menu screen'
            },
            options: {
              topbar: {
                visible: true
              },
            }
          }
        },
        center: {
          component: {
            name: 'hrms_newleave'
          },
        },

      }
    }
  });
}
export const goToProfile = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'hrms_profile',
            passProps: {
              text: 'This is a left side menu screen'
            }
          }
        },
        center: {
          component: {
            name: 'hrms_home'
          },
        },

      }
    }
  });
}





