import React, { Component } from "react";
import { View, Alert,Text, Image, StyleSheet,KeyboardAvoidingView,AsyncStorage } from "react-native";
import CommonStyle from "../../style/comman";
import CommonStrings from "../../config/string";
import { Input, Button } from 'react-native-elements'
import dimen from '../../config/dimen'
import colors from "../../config/colors";
import apiconfig from "../../config/Api";
import ProgressDialog from '../../utility/progressdialog';
import {goToRootScreen,goToForgotPasssword} from "../AppNavigator"
import validateInput from "../../utility/validation";

export default class Login extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      profile:"",
      isProgress: false ,
      controls: {
        email: {
          value: "",
          valid: false,
          validationRules: {
            isEmail: true
          },
          touched: false
        },
        password: {
          value: "",
          valid: false,
          validationRules: {
            minLength: 6
          },
          touched: false
        },
       },
    }
  }
  openProgressbar = (val) => {
    this.setState({ isProgress: val })
  }
  startDrawerScreen = () => {
         goToRootScreen(CommonStrings.screen_home,"Home")
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
      this.state.isProgress ?
      <ProgressDialog visible ={true} />
      :
      <KeyboardAvoidingView style={CommonStyle.container}  behavior="padding">
            <ProgressDialog visible ={false} />

      <View style={CommonStyle.container}>

        <Image source={require('../../assets/ic_salogo.png')} style={CommonStyle.image} />
        <View style={CommonStyle.verticalView}>
          <Text style={styles.titleText}>{CommonStrings.str_welcome}</Text>
          <Text style={styles.smallText}>{CommonStrings.str_credentials}</Text>
          <Input containerStyle={CommonStyle.inputContainer}  autoCapitalize="none"
           autoCorrect={false} keyboardType="email-address"  touched={this.state.controls.email.touched} inputStyle={CommonStyle.commonInputStyle} placeholder="Email" value={this.state.controls.email.value} onChangeText={val => this.validateUserInput("email",val)} />
          <Input containerStyle={CommonStyle.inputContainer} touched={this.state.controls.password.touched}
           inputStyle={CommonStyle.commonInputStyle} placeholder="Password" value={this.state.controls.password.value} secureTextEntry={true} onChangeText={val => this.validateUserInput("password",val)} />
        <View style = {CommonStyle.horizontalView}>
         <Button buttonStyle={CommonStyle.buttonstyle} 
          //  disabled={
          //     !this.state.controls.email.valid ||
          //     !this.state.controls.password.valid
          //   }
            title={CommonStrings.action_login} onPress={this.onLoginPress} />
         </View>
          <Text style={styles.forgotStyle} onPress ={goToForgotPasssword}>{CommonStrings.str_forgotpassword}</Text>
        </View>
      </View>
      </KeyboardAvoidingView>
    );
  }


  validateUserInput=(key,val)=>{
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    this.setState(prevState => {

      return {
        controls: {
          ...prevState.controls,
           [key]: {
            ...prevState.controls[key],
            value: val,
            valid: validateInput(
              val,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  }

  onLoginPress = async () => {
               this.startDrawerScreen();

  //  this.openProgressbar(true);
  //  await fetch(apiconfig.Base_url+ apiconfig.LoginApi, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }, 
  //       body: JSON.stringify({
  //           "email":this.state.controls.email.value.trim(),
  //           "password":this.state.controls.password.value.trim()
  //         })
  //     })
  //     .then((response) => { 
  //       status = response.status.toString();
  //       return response.json()}
  //       )
  //     .then((responseJson) => {
  //       this.openProgressbar(false);
  //       this.setState(
  //         {
  //           isLoading: false,
  //           profile: responseJson.user
  //         },
  //    // In this block you can do something with new state.
  //      function() {
  //        const json= responseJson
  //       if (status === "200") {
  //         this.saveAccessToken(json.access_token)
  //         this.startDrawerScreen();
  //        }else{
  //         alert("error:  " + json.message);
  //       }
  //       })
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       alert("error:  " + error);
  //     });
  }

   saveAccessToken = async token => {
    try {
      await AsyncStorage.setItem('accesstoken', token);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  };

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

  forgotStyle: {
    width: '100%',
    fontSize: dimen.fontSmall,
    color: colors.colorPrimary,
    margin: dimen.marginTiny
  },

})

