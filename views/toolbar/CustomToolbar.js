import React from 'react'
import {ToolbarAndroid} from 'react-native'

module.exports = React.createClass({
    render: function() {
      return (
        <ToolbarAndroid
          title={this.props.title}
          navIcon = {{uri: require("../../assets/ic_drawer.png"), isStatic: true}}
          style = {styles.toolbar}
          titleColor='#FFFFFF'
          onIconClicked={this._onIconClicked}/>
      );
    },
  
    _onIconClicked: function(){
      this.props.sidebarRef.refs['DRAWER'].openDrawer();
      // sidebarRef is the rendering component we're passing
    }
  });