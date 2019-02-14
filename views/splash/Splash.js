import React, { Component } from "react";
import { Image,Text,View,StyleSheet } from "react-native";
import CommonStyle from "../../style/comman";
import CommonStrings from "../../config/string";
import Constants from  "../../config/constants"

export default class Splash extends Component {
  static navigationOptions = {
    headerMode: 'none'
  };
  constructor(props){
    super(props)
    this.state={
      companyname: CommonStrings.company_name,
      Companyquate: CommonStrings.company_qoute

    }
  }         

  componentDidMount() {
    setTimeout(() => {
       this.load();
          }, 2000);
    }

   load = () => {
     if(Constants.isLoggeIn){
   //   this.props.navigation.navigate('Home');
     }else{
    //  this.props.navigation.navigate('Auth');
     }
      
    };

  render() {
    // eslint-disable-line class-methods-use-this
    return (
      <View style ={CommonStyle.container}>
      <View style ={CommonStyle.horizontalView}>
        <Image source={require("../../assets/ic_salogo.png")} style={Style.image}/>
        <View style={CommonStyle.verticalView}>
          <Text style ={Style.titleText}>{this.state.companyname}</Text>
          <Text style ={Style.smallText}>{this.state.Companyquate}</Text>
        </View>
        </View>
      </View>
      
    );
  }
}
const Style = StyleSheet.create({
  image: {
    width : 100,
    height: 100,
    margin:10
     },
  titleText: {
    width:'100%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  smallText: {
    width:'100%',
    fontSize: 14,
  },
})


