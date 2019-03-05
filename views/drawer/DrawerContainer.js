import React from 'react';
import { StyleSheet, Text,ToastAndroid, View, Image, ScrollView, TouchableOpacity,alert, ImageBackground } from 'react-native';
import TitleText from '../../customComponent/TitleText'
import { Navigation } from 'react-native-navigation'
import strings from "../../config/string"
import Icon from "react-native-vector-icons/Ionicons";
import {goToLogin} from "../AppNavigator"

let iconSize = 25;
var previousroute =""

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props)
    this.props.isSideDrawerVisible = props.isSideDrawerVisible
    Navigation.events().bindComponent(this);
    this.onDrawerClick = this.onDrawerClick.bind(this);

  }
  componentDidAppear(){
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        'left': {
          visible: true
       }
      }
    });
  }

  componentDidMount() {
    ToastAndroid.show("componentDidMount",ToastAndroid.SHORT)
    this.props.isSideDrawerVisible = false
  }
    
  async onDrawerClick(){
    ToastAndroid.show("onDrawerClick",ToastAndroid.SHORT)
  }

  navigateToScreen = (routename, title) => () => {
  
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        'left': {
          visible: false,
          
       }
      }
    });
      if(routename != this.previousroute){
  
       Navigation.push('navigation_stack', {
         component: {
         name: routename,
         passProps: {
           isSideDrawerVisible: this.props.isSideDrawerVisible
         },
         options: {
           topBar: {
             title: {
               text: title
             },
           }
         }
       }
     });
   }
    this.previousroute = routename
  }
 
 
  navigationButtonPressed({ buttonId }) {
    alert('menuIcon');

    if (buttonId === 'cancelBtn') {
      Navigation.dismissModal(this.props.componentId);
    } else if (buttonId === 'menu') {
      alert('menuIcon');
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View >
          <ImageBackground style={styles.footerContainer} source={require('../../assets/ic_salogo.png')}>
            <View style={padding=10} >
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>
                John Doe
                </Text>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                johndoe@gmail.com
                </Text>
            </View>
            </ImageBackground>
            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_signup, "Register Employee")} >
                  <Icon name='md-person-add' size={iconSize} style={styles.drawerIcon} />
                  <TitleText style={styles.navItemStyle} >Register Employee</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_home, "Home")} >
                  <Icon name='md-home' size={iconSize} style={styles.drawerIcon} />
                  <TitleText style={styles.navItemStyle} >Home</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_profile, "Profile")}>
                  <Icon name='md-person' size={iconSize} style={styles.drawerIcon} />
                  <TitleText style={styles.navItemStyle}>Profile</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen("hrms_newleave", "New Leave")} >
                  <Icon name='md-at' size={iconSize} style={styles.drawerIcon} />
                  <Text style={styles.navItemStyle}>NewLeave</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen("hrms_policy", "Policy")} >
                <Icon name='md-settings' size={iconSize} style={styles.drawerIcon} />
                <TitleText style={styles.navItemStyle} >Policy</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen("hrms_faq", "Faq")} >
                <Icon name='md-help' size={iconSize} style={styles.drawerIcon} />
                <TitleText style={styles.navItemStyle} >Faq</TitleText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerMenu} onPress={goToLogin} >
                <Icon name='md-log-out' size={iconSize} style={styles.drawerIcon} />
                <TitleText style={styles.navItemStyle} >Logout</TitleText>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>

        {/* <View >
          <ImageBackground style={styles.footerContainer}
            source={require('../../assets/ic_salogo.png')} />
        </View> */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },

  navItemStyle: {
    padding: 15,
    marginLeft: 20,

  },
  navSectionStyle: {
    marginLeft: 20,
  },

  drawerIcon: {
    color: "#000000"
  },

  drawerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#E0E0E0',
    color: '#003759'
  },
  footerContainer: {
    padding: 20,
    backgroundColor: '#fcc358',
  }
})