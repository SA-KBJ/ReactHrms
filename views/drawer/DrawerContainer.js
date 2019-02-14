import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-native-navigation';
import TitleText from '../../customComponent/TitleText'
import CommonStyle from '../../style/comman'

let iconSize = 25;

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props)
  }
  navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
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

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('Home')}>
                {/* <Icon name='account' size={iconSize} style={styles.drawerIcon} /> */}
                <TitleText style={styles.navItemStyle} >Home</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('Profile')}>
                {/* <Icon name='clipboard-text' size={iconSize} style={styles.drawerIcon} /> */}
                <TitleText style={styles.navItemStyle}>Profile</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('NewLeave')}>
                {/* <Icon name='animation' size={iconSize} style={styles.drawerIcon} /> */}
                <Text style={styles.navItemStyle}>NewLeave</Text>
              </TouchableOpacity>

            </View>


            <View style={styles.navSectionStyle}>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('Policy')}>
                {/* <Icon name='rss' size={iconSize} style={styles.drawerIcon} /> */}
                <TitleText style={styles.navItemStyle} >Policy</TitleText>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('Faq')}>
                {/* <Icon name='application' size={iconSize} style={styles.drawerIcon} /> */}
                <TitleText style={styles.navItemStyle} >Faq</TitleText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerMenu}>
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
    flex: 1
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