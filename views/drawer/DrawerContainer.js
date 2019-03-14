import React from 'react';
import { StyleSheet, Text,ToastAndroid, View, AsyncStorage, ScrollView, TouchableOpacity,alert, ImageBackground } from 'react-native';
import TitleText from '../../customComponent/TitleText'
import { Navigation } from 'react-native-navigation'
import strings from "../../config/string"
import Icon from "react-native-vector-icons/Ionicons";
import {goToLogin} from "../AppNavigator"
import CommonStyle from "../../style/comman";

let iconSize = 25;

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
  

  onLogoutClick(){
    AsyncStorage.clear(function(err,result){
      goToLogin()
    });
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
              {/* <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_signup, strings.title_register)} >
                  <Icon name='md-person-add' size={iconSize} style={styles.drawerIcon} />
                  <TitleText style={styles.navItemStyle} >{strings.title_register}</TitleText>
              </TouchableOpacity> */}

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_home, strings.title_home)} >
                  <Icon name='md-home' size={iconSize} style={styles.drawerIcon} />
                  <TitleText style={styles.navItemStyle} >{strings.title_home}</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_profile, strings.title_profile)}>
                  <Icon name='md-person' size={iconSize} style={styles.drawerIcon} />
                  <TitleText style={styles.navItemStyle}>{strings.title_profile}</TitleText>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_newleave, strings.title_newleave)} >
                  <Icon name='md-at' size={iconSize} style={styles.drawerIcon} />
                  <TitleText style={styles.navItemStyle}>{strings.title_newleave}</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_holiday,strings.title_holiday)} >
                <Icon name='md-train' size={iconSize} style={styles.drawerIcon} />
                <TitleText style={styles.navItemStyle} >{strings.title_holiday}</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_policy, strings.title_policy)} >
                <Icon name='md-settings' size={iconSize} style={styles.drawerIcon} />
                <TitleText style={styles.navItemStyle} >{strings.title_policy}</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_faq, strings.title_faq)} >
                <Icon name='md-help' size={iconSize} style={styles.drawerIcon} />
                <TitleText style={styles.navItemStyle} >{strings.title_faq}</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.onLogoutClick} >
                <Icon name='md-log-out' size={iconSize} style={styles.drawerIcon} />
                <TitleText style={styles.navItemStyle} >{strings.title_logout}</TitleText>
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

Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
  
  Navigation.mergeOptions(strings.screen_drawer_container, {
    sideMenu: {
      left: {
        visible: true
      }
    }
  });
  });
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },

  navItemStyle: {
    flex:1,
    marginLeft: 15,
  },
  navSectionStyle: {
    marginLeft: 20,
  },

  drawerIcon: {
    color: "#000000",
    marginRight:5
  },

  drawerMenu: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    padding:15,
    justifyContent:'flex-start',
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