import React, { Component } from "react";
import {Platform} from 'react-native'
import {WebView} from 'react-native-webview'
import { Navigation } from 'react-native-navigation'

const isAndroid=  Platform.OS==='android'

export default class Policy extends Component {

  constructor(props) {
    super(props)}


render(){
    return(
        <WebView
        originWhitelist={['*']}
        source= {{ uri: isAndroid ? 'file:///android_asset/policy.html'
        :require("../../assets/policy.html")}}
        startInLoadingState={true} 
        style={{ marginTop:5 }}
      />
   );
 }
}
 