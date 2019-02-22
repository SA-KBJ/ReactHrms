import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import TitleText from '../../customComponent/TitleText'
import Icon from 'react-native-vector-icons/Ionicons'
import CommonStyle from '../../style/comman'
import{goToRootScreen} from '../AppNavigator'
import{Navigation} from 'react-native-navigation'
import strings from "../../config/string"
let iconSize = 25;

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this);
    console.log("this.props.text,"+this.props.text);
  }

 
  componentDidAppear() {
    this.props.isSideDrawerVisible = false;
  }
  componentDidDisappear() {
    this.props.isSideDrawerVisible = true;
  }
  navigateToScreen = (routename,title) => () => {
    (!this.props.isSideDrawerVisible) ? this.props.isSideDrawerVisible = true : this.props.isSideDrawerVisible = false

    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        'left': {
          //visible: this.props.isSideDrawerVisible
        }
      }
    });

    Navigation.setStackRoot('navigation_stack', {
      component: {
        name: routename,
        passProps: {
          isSideDrawerVisible: this.props.isSideDrawerVisible
        }
      }
    });
  //  goToRootScreen(routename,title)
  }


  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View >
            {/* <Image
              style={CommonStyle.roundedImage}
              source={require('../../assets/ic_salogo.png')}/> */}
             <View style={styles.footerContainer}>
                 <Text style={{ color: 'black',fontWeight:'bold',fontSize: 15, marginTop: 10 }}>
                  John Doe
                </Text>
                <Text style={{color: 'black',fontWeight:'bold' ,fontSize: 15 }}>
                  johndoe@gmail.com
                </Text>

              </View>
                     
            <View style={styles.navSectionStyle}>
            <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_signup,"Register Employee")} >
                {/* <Icon name='account' size={iconSize} style={styles.drawerIcon} /> */}
                <TitleText style={styles.navItemStyle} >Register Employee</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_home,"Home")} >
                {/* <Icon name='account' size={iconSize} style={styles.drawerIcon} /> */}
                <TitleText style={styles.navItemStyle} >Home</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen(strings.screen_profile,"Profile")}>
                {/* <Icon name='clipboard-text' size={iconSize} style={styles.drawerIcon} /> */}
                <TitleText style={styles.navItemStyle}>Profile</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen("hrms_newleave","New Leave")} >
                {/* <Icon name='animation' size={iconSize} style={styles.drawerIcon} /> */}
                <Text style={styles.navItemStyle}>NewLeave</Text>
              </TouchableOpacity>

            </View>


            <View style={styles.navSectionStyle}>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen("hrms_policy","Policy")} >
                {/* <Icon name='rss' size={iconSize} style={styles.drawerIcon} /> */}
                <TitleText style={styles.navItemStyle} >Policy</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen("hrms_faq","Faq")} >
                {/* <Icon name='application' size={iconSize} style={styles.drawerIcon} /> */}
                <TitleText style={styles.navItemStyle} >Faq</TitleText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerMenu} >
            {/* <Icon name='logout' size={iconSize} style={styles.drawerIcon} /> */}
            <TitleText style={styles.navItemStyle} >Logout</TitleText>
          </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View >
        <ImageBackground style={styles.footerContainer}
              source={require('../../assets/ic_salogo.png')}/>
        </View>
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
    color: "grey"
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