import React from 'react'
import {
View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    isProgress: false ,

    controls:{
      firstname:{
        value: "",
        valid: false,
        touched: false
      },
      middlename:{
        value: "",
        valid: false,
        touched: false
      },
      lastname:{
        value: "",
        valid: false,
        touched: false
      },
      birthdate:{
        value: "",
        valid: false,
        touched: false
      },
      gender:{
        value: "",
        valid: false,
        touched: false
      },
      address:{
        value: "",
        valid: false,
        touched: false
      },
      mobilenumber:{
        value: "",
        valid: false,
        touched: false
      }, 
      permanentaddress:{
        value: "",
        valid: false,
        touched: false
      },    
      pannumber:{
        value: "",
        valid: false,
        touched: false
      },
      adhaarnumber:{
        value: "",
        valid: false,
        touched: false
      },
      passportnumber:{
        value: "",
        valid: false,
        touched: false
      },
      password:{
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      email:{ 
        value: "",
        valid: false,
        validationRules: {
          isEmail:true
        },
        touched: false
      }
    }
    
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})