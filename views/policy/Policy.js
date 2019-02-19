import React, { Component } from "react";
import {WebView,Platform} from 'react-native'

export default class Policy extends Component {
render(){
    return(
      //   <WebView
      //   originWhitelist={['*']}
      //   domStorageEnabled={true}
      //   javaScriptEnabled={true}
      //   source={Platform.OS === 'ios' ? require('.../../assets/policy.html') : {uri: "file:///android_asset/assets/policy.html"}}
      //   style={{ marginTop:10 }}
      // />
       <WebView ref ="webview" automaticallyAdjustContentInsets={false} source={require("../../assets/policy.html")} />

   );
   
}

}
 