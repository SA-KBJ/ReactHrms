import React, { Component } from "react";
import { View, Alert, Text, Image, StyleSheet,KeyboardAvoidingView } from "react-native";
import CommonStyle from "../../style/comman";
import CommonStrings from "../../config/string";
import { Input, Button } from 'react-native-elements'
import dimen from '../../config/dimen'
import colors from "../../config/colors";
import {goToHome,goToRootScreen} from "../AppNavigator"


export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
   
    headerStyle: {
      backgroundColor: '#ffffff',
    },
  
    headerTintColor: colors.colorPrimary,
    headerTitleStyle: {
    width:'90%',
      fontWeight: 'bold',
      alignSelf:'center'

    },
  };
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      welcomeText: CommonStrings.str_welcome,
      pmsCredentials: CommonStrings.str_credentials,
      forgotPw: CommonStrings.str_forgotpassword
    }
  }

  componentDidMount() {
    //this method call when page visible to user
    // this.callAlert(Constants.alert_title, "Email: johndoe@gmail.com | Password: 123456", null)
  }

  setEmail(email) {
    this.setState({ email })
  }

  setPassword(password) {
    this.setState({ password })
  }
  validateData = () => {
    // if (this.state.email == '') {
    //   this.callAlert(Constants.alert_title, Constants.error_email)
    // } else if (this.state.password == '') {
    //   this.callAlert(Constants.alert_title, Constants.error_password)
    // } else {
      goToRootScreen("hrms_home","Home")

  }

  callAlert(title, message, func) {
    Alert.alert(
      title, message,
      [
        { text: 'OK', onPress: () => func },
      ],
      { cancelable: false }
    )
  }
   render() {
    return (
      <KeyboardAvoidingView style={CommonStyle.container}  behavior="padding" enabled>
      <View style={CommonStyle.container}>

        <Image source={require('../../assets/ic_salogo.png')} style={CommonStyle.image} />
        <View style={CommonStyle.verticalView}>
          <Text style={styles.titleText}>{this.state.welcomeText}</Text>
          <Text style={styles.smallText}>{this.state.pmsCredentials}</Text>
          <Input containerStyle={styles.inputContainer} inputStyle={styles.input} placeholder="Email" onChangeText={(text) => this.setEmail(text)} />
          <Input containerStyle={styles.inputContainer} inputStyle={styles.input} placeholder="Password" onChangeText={(text) => this.setPassword(text)} />
         <View style = {CommonStyle.horizontalView}>
         
         <Button buttonStyle={styles.buttonStyle} title={CommonStrings.action_login} onPress={this.validateData} />
         </View>
       
          <Text style={styles.forgotStyle} onPress ={this.navigateToForgotPasswordPage}>{this.state.forgotPw}</Text>
        </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    width: '100%',
    fontSize: dimen.fontNormal,
    color: colors.night,
    fontWeight: 'bold',
  },
  smallText: {
    width: '100%',
    fontSize: dimen.fontSmall,
    color: colors.night,
    marginBottom: dimen.marginTiny
  },
  inputContainer: {
    width: "62%",
    margin: dimen.marginTiny,
    alignItems: 'center',
  },
  buttonStyle: {
    width:'100%',
    alignItems: 'stretch',
    marginTop:dimen.marginSmall,
    marginBottom:dimen.marginSmall,
    backgroundColor:colors.colorPrimary,
  },
  input: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: dimen.fontNormal,
    flex: 1,
    minHeight: 40,
  },
  forgotStyle: {
    width: '100%',
    fontSize: dimen.fontSmall,
    color: colors.colorPrimary,
    margin: dimen.marginTiny
  },

})

