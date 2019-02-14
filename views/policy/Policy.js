import React, { Component } from "react";
import { View,WebView } from "react-native";

export default class Policy extends Component {
render(){
    return(

        <WebView ref={'webview'} automaticallyAdjustContentInsets={false} source={require("../../assets/policy.html")} />

   );
   
}

}
