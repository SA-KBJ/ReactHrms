import React, { Component } from "react";
import { View, Alert, Text, Image,TouchableOpacity, StyleSheet } from "react-native";

export default class Home extends Component {
  constructor(props){
        super(props)
    }
  
render(){
    
    return(
        <View style>
            <Text style ={fontSize= 18 } >Home Screen</Text>
        </View>
    );
   
}

componentDidAppear() {
    this.props.isSideDrawerVisible = true;
  }
  componentDidDisappear() {
    this.props.isSideDrawerVisible = true;
  }
}


